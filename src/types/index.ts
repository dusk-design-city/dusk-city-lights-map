
export interface VenueLocation {
  lat: number;
  lng: number;
}

export interface VenueHoursPeriod {
  close: {
    day: number;
    time: string;
  };
  open: {
    day: number;
    time: string;
  };
}

export interface VenueOpeningHours {
  open_now: boolean;
  periods: VenueHoursPeriod[];
  weekday_text: string[];
}

export interface Venue {
  place_id: string;
  name: string;
  address: string;
  location: VenueLocation;
  opening_hours: VenueOpeningHours;
  keyword_match: VenueType;
}

export type VenueType = 'bar' | 'club' | 'lounge' | 'pub' | 'restaurant';

export interface TimeFilter {
  day: number;
  hour: number;
  minute: number;
}

export interface Filters {
  time: TimeFilter;
  venueTypes: VenueType[];
  onlyShowOpen: boolean;
  lateNightOnly: boolean;
}

export interface FilterContextType {
  filters: Filters;
  setDayAndTime: (day: number, hour: number, minute: number) => void;
  toggleVenueType: (type: VenueType) => void;
  toggleOnlyShowOpen: () => void;
  toggleLateNightOnly: () => void;
  resetFilters: () => void;
}

export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const VENUE_TYPES: VenueType[] = ['bar', 'club', 'lounge', 'pub', 'restaurant'];

export const VENUE_TYPE_COLORS = {
  bar: '#9b87f5',     // Purple
  club: '#F97316',    // Amber
  lounge: '#EC4899',  // Pink
  pub: '#10B981',     // Emerald
  restaurant: '#3B82F6' // Blue
};

export const VENUE_TYPE_LABELS = {
  bar: 'Bar',
  club: 'Club',
  lounge: 'Lounge',
  pub: 'Pub',
  restaurant: 'Restaurant'
};
