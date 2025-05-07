
import React from 'react';
import { Venue } from '../types';
import { Clock } from 'lucide-react';

interface VenueCardProps {
  venue: Venue;
  isOpen: boolean;
  isLateNight: boolean;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue, isOpen, isLateNight }) => {
  return (
    <div className="p-2 w-60 max-w-full">
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-lg">{venue.name}</h3>
        <div className="flex items-center ml-2">
          {isOpen ? (
            <div className="flex items-center">
              <span 
                className={`h-2 w-2 rounded-full ${isLateNight ? 'bg-nightlife-amber' : 'bg-green-500'} mr-1`}
              />
              <span className="text-xs font-medium">
                {isLateNight ? 'Late Night' : 'Open'}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-gray-500 mr-1" />
              <span className="text-xs text-gray-400 font-medium">Closed</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-sm text-nightlife-text-secondary mt-1">{venue.keyword_match.charAt(0).toUpperCase() + venue.keyword_match.slice(1)}</p>
      <p className="text-sm text-nightlife-text-secondary mt-2">{venue.address}</p>
      
      <div className="mt-3 border-t border-white/10 pt-2">
        <div className="flex items-center">
          <Clock size={14} className="text-nightlife-text-muted mr-1" />
          <span className="text-xs text-nightlife-text-muted">Hours:</span>
        </div>
        <div className="mt-1 max-h-24 overflow-y-auto scrollbar-none">
          {venue.opening_hours.weekday_text.map((dayHours, index) => (
            <p 
              key={index} 
              className={`text-xs ${dayHours.startsWith(getDayName(new Date().getDay())) 
                ? 'text-nightlife-purple-light' 
                : 'text-nightlife-text-secondary'}`}
            >
              {dayHours}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get day name
function getDayName(index: number): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[index];
}

export default VenueCard;
