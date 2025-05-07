
import { createContext, useContext, useState, ReactNode } from 'react';
import { FilterContextType, Filters, TimeFilter, Venue, VenueType, VENUE_TYPES } from '../types';

// Get current day and time
const now = new Date();
const currentDay = now.getDay();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();

// Initial filter state
const initialFilters: Filters = {
  time: {
    day: currentDay,
    hour: currentHour,
    minute: currentMinute
  },
  venueTypes: [...VENUE_TYPES],
  onlyShowOpen: false,
  lateNightOnly: false
};

// Create context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const setDayAndTime = (day: number, hour: number, minute: number) => {
    setFilters(prev => ({
      ...prev,
      time: { day, hour, minute }
    }));
  };

  const toggleVenueType = (type: VenueType) => {
    setFilters(prev => {
      if (prev.venueTypes.includes(type)) {
        return {
          ...prev,
          venueTypes: prev.venueTypes.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          venueTypes: [...prev.venueTypes, type]
        };
      }
    });
  };

  const toggleOnlyShowOpen = () => {
    setFilters(prev => ({
      ...prev,
      onlyShowOpen: !prev.onlyShowOpen
    }));
  };

  const toggleLateNightOnly = () => {
    setFilters(prev => ({
      ...prev,
      lateNightOnly: !prev.lateNightOnly
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FilterContext.Provider value={{
      filters,
      setDayAndTime,
      toggleVenueType,
      toggleOnlyShowOpen,
      toggleLateNightOnly,
      resetFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useVenueFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useVenueFilters must be used within a FilterProvider');
  }
  return context;
};

// Helper function to check if a venue is open at a specific time
export const isVenueOpenAt = (venue: Venue, day: number, hour: number, minute: number): boolean => {
  // Convert hour and minute to 24-hour format string (e.g. "2330" for 11:30 PM)
  const timeString = `${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`;
  
  // Loop through all opening periods
  for (const period of venue.opening_hours.periods) {
    const openDay = period.open.day;
    const openTime = period.open.time;
    const closeDay = period.close.day;
    const closeTime = period.close.time;
    
    // Determine if the venue spans multiple days
    const multiDayVenue = closeDay !== openDay;
    
    // Handle regular case: open and close on same day
    if (!multiDayVenue && day === openDay) {
      if (timeString >= openTime && timeString <= closeTime) {
        return true;
      }
    }
    
    // Handle case where venue is open across midnight
    if (multiDayVenue) {
      // If we're on the opening day and after opening time
      if (day === openDay && timeString >= openTime) {
        return true;
      }
      
      // If we're on the closing day and before closing time
      if (day === closeDay && timeString <= closeTime) {
        return true;
      }
      
      // If the venue is open across multiple days (e.g., open Thursday, closes Saturday)
      // and we're on a day in between
      if (openDay < closeDay) {
        if (day > openDay && day < closeDay) {
          return true;
        }
      } else {
        // Handle week wrap-around (e.g., open Saturday, closes Monday)
        if (day > openDay || day < closeDay) {
          return true;
        }
      }
    }
  }
  
  return false;
};

// Helper function to check if venue is a late-night venue (open past 2AM)
export const isLateNightVenue = (venue: Venue): boolean => {
  for (const period of venue.opening_hours.periods) {
    const closeTime = period.close.time;
    const closeHour = parseInt(closeTime.substring(0, 2), 10);
    if (closeHour >= 2 && closeHour < 12) {
      return true;
    }
  }
  return false;
};

// Filter venues based on the current filters
export const filterVenues = (venues: Venue[], filters: Filters): Venue[] => {
  return venues.filter(venue => {
    // Filter by venue type
    if (!filters.venueTypes.includes(venue.keyword_match)) {
      return false;
    }
    
    // Filter by "open now" if selected
    if (filters.onlyShowOpen) {
      const isOpen = isVenueOpenAt(
        venue, 
        filters.time.day, 
        filters.time.hour, 
        filters.time.minute
      );
      if (!isOpen) return false;
    }
    
    // Filter by late night only if selected
    if (filters.lateNightOnly && !isLateNightVenue(venue)) {
      return false;
    }
    
    return true;
  });
};
