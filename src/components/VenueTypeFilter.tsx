
import React from 'react';
import { VenueType, VENUE_TYPES, VENUE_TYPE_COLORS, VENUE_TYPE_LABELS } from '../types';

interface VenueTypeFilterProps {
  selectedTypes: VenueType[];
  onToggleType: (type: VenueType) => void;
}

const VenueTypeFilter: React.FC<VenueTypeFilterProps> = ({
  selectedTypes,
  onToggleType
}) => {
  return (
    <div className="space-y-1">
      {VENUE_TYPES.map(type => (
        <button
          key={type}
          onClick={() => onToggleType(type)}
          className={`flex items-center w-full px-3 py-1.5 rounded-md text-left text-sm transition-all ${
            selectedTypes.includes(type)
              ? 'bg-nightlife-card'
              : 'opacity-50 hover:opacity-70'
          }`}
        >
          <span
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: VENUE_TYPE_COLORS[type] }}
          />
          <span>{VENUE_TYPE_LABELS[type]}</span>
        </button>
      ))}
    </div>
  );
};

export default VenueTypeFilter;
