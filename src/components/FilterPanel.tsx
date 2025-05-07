
import React, { useState } from 'react';
import TimeFilter from './TimeFilter';
import VenueTypeFilter from './VenueTypeFilter';
import { useVenueFilters } from '../hooks/useVenueFilters';
import { MapPin, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const FilterPanel: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    filters,
    setDayAndTime,
    toggleVenueType,
    toggleOnlyShowOpen,
    toggleLateNightOnly,
    resetFilters,
  } = useVenueFilters();

  return (
    <div
      className={`relative flex flex-col glass-panel rounded-r-lg transition-all duration-300 ${
        collapsed ? 'w-12' : 'w-72'
      } h-full`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-nightlife-purple w-6 h-12 rounded-r-md flex items-center justify-center z-10"
      >
        {collapsed ? (
          <ArrowRight size={14} />
        ) : (
          <ArrowLeft size={14} />
        )}
      </button>

      {collapsed ? (
        <div className="flex flex-col items-center py-4 space-y-6">
          <MapPin size={18} />
          <Clock size={18} />
        </div>
      ) : (
        <div className="p-4 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-6 text-glow">Dusk</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2 flex items-center">
              <Clock size={14} className="mr-1" />
              Time Filter
            </h3>
            <TimeFilter
              day={filters.time.day}
              hour={filters.time.hour}
              minute={filters.time.minute}
              onTimeChange={setDayAndTime}
            />
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Venue Types</h3>
            <VenueTypeFilter
              selectedTypes={filters.venueTypes}
              onToggleType={toggleVenueType}
            />
          </div>
          
          <div className="mb-6 space-y-2">
            <h3 className="font-medium mb-2">Options</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showOpenOnly"
                checked={filters.onlyShowOpen}
                onChange={toggleOnlyShowOpen}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-nightlife-purple focus:ring-nightlife-purple"
              />
              <label htmlFor="showOpenOnly" className="text-sm">
                Show only open venues
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showLateNightOnly"
                checked={filters.lateNightOnly}
                onChange={toggleLateNightOnly}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-nightlife-purple focus:ring-nightlife-purple"
              />
              <label htmlFor="showLateNightOnly" className="text-sm">
                Late night spots (open past 2AM)
              </label>
            </div>
          </div>
          
          <div className="mt-auto">
            <button
              onClick={resetFilters}
              className="text-sm text-nightlife-text-muted hover:text-white transition-colors"
            >
              Reset filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
