
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map as MapboxMap, Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Venue, VENUE_TYPE_COLORS } from '../types';
import { isVenueOpenAt, isLateNightVenue } from '../hooks/useVenueFilters';
import VenueCard from './VenueCard';

// Updated with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1pbnRlcjA4IiwiYSI6ImNtOXN5endrbTA2MDMyaXBvdm1hNW96bmMifQ.qumSdswJwxqVGwqULikudw';

interface MapProps {
  venues: Venue[];
  day: number;
  hour: number;
  minute: number;
}

const Map: React.FC<MapProps> = ({ venues, day, hour, minute }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapboxMap | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const popupRef = useRef<Popup | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-74.00, 40.72], // Lower Manhattan coordinates
      zoom: 14
    });

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Add or update markers whenever venues or time changes
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add new markers
    venues.forEach(venue => {
      // Check if venue is open at the specified time
      const isOpen = isVenueOpenAt(venue, day, hour, minute);
      const isLateNight = isLateNightVenue(venue);
      
      // Create a custom marker element
      const el = document.createElement('div');
      el.className = 'flex items-center justify-center';
      
      const markerInner = document.createElement('div');
      markerInner.className = `w-5 h-5 rounded-full transition-all duration-300`;
      
      // Set marker color based on venue type
      const color = VENUE_TYPE_COLORS[venue.keyword_match];
      markerInner.style.backgroundColor = color;
      
      // Add glow effect for open venues
      if (isOpen) {
        if (isLateNight) {
          // Late night venue (open past 2am) - pulsing effect
          markerInner.className += ' animate-pulse-subtle';
          markerInner.style.boxShadow = `0 0 8px 2px ${color}`;
        } else {
          // Regular open venue - glow effect
          markerInner.style.boxShadow = `0 0 5px 1px ${color}`;
        }
      } else {
        // Closed venue - dimmed
        markerInner.style.opacity = '0.5';
      }
      
      el.appendChild(markerInner);
      
      // Create and add the marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat([venue.location.lng, venue.location.lat])
        .addTo(map.current as MapboxMap);
      
      // Add click event to show popup
      marker.getElement().addEventListener('click', () => {
        // Close any existing popup
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
        
        // Create a React element for the popup content
        const popupNode = document.createElement('div');
        
        // Render the VenueCard component into the popup
        const root = createRoot(popupNode);
        root.render(
          <VenueCard
            venue={venue}
            isOpen={isOpen}
            isLateNight={isLateNight}
          />
        );
        
        // Create and add the popup
        popupRef.current = new mapboxgl.Popup({ offset: 25 })
          .setLngLat([venue.location.lng, venue.location.lat])
          .setDOMContent(popupNode)
          .addTo(map.current as MapboxMap);
      });
      
      markersRef.current[venue.place_id] = marker;
    });
  }, [venues, day, hour, minute, mapLoaded]);

  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="h-full w-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nightlife-background to-transparent" />
    </div>
  );
};

import { createRoot } from 'react-dom/client';

export default Map;
