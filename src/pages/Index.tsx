import React from 'react';
import Map from '../components/Map';
import FilterPanel from '../components/FilterPanel';
import { FilterProvider, useVenueFilters, filterVenues } from '../hooks/useVenueFilters';
import venues from '../data/venues';

const DuskApp: React.FC = () => {
  const { filters } = useVenueFilters();
  const filteredVenues = filterVenues(venues, filters);

  return (
    <div className="flex h-screen">
      <FilterPanel />
      <div className="flex-1 relative">
        <Map 
          venues={filteredVenues}
          day={filters.time.day}
          hour={filters.time.hour}
          minute={filters.time.minute}
        />
        <div className="absolute top-4 right-4 bg-nightlife-card/80 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm border border-white/10">
          {filteredVenues.length} venues found
        </div>
        <div className="absolute bottom-4 right-4 text-xs text-nightlife-text-muted">
          <p>Showing real venue data from New York City.</p>
        </div>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <FilterProvider>
      <DuskApp />
    </FilterProvider>
  );
};

export default Index;
