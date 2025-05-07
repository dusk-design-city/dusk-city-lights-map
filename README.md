# Dusk - Urban Nightlife Intelligence Platform

A map-based application that helps users explore nightlife venues by time and venue type. This project uses React, TypeScript, Mapbox GL, and Tailwind CSS.

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Replace the Mapbox access token in `src/components/Map.tsx` with your own token
4. Start the development server: `npm run dev`

## Features

- Interactive dark-themed Mapbox map centered on Lower Manhattan
- Venue markers with different colors based on venue type
- Popup details showing venue information
- Time-based filtering to display venues open at a selected time
- Venue type filtering (bars, clubs, lounges, pubs, etc.)
- Options to show only currently open venues or late-night venues

## Replacing Placeholder Data

This application is set up with placeholder data. To replace it with your own data:

1. Replace the data in `src/data/sampleVenues.ts` with your actual venue data
2. Ensure your data follows the same structure:

```json
{
  "place_id": "unique-id",
  "name": "Venue Name",
  "address": "Street Address",
  "location": {
    "lat": 40.7xxx,
    "lng": -74.0xxx
  },
  "opening_hours": {
    "open_now": true,
    "periods": [
      {
        "close": {
          "day": 1,
          "time": "0200"
        },
        "open": {
          "day": 0,
          "time": "1200"
        }
      },
      // additional periods
    ],
    "weekday_text": [
      "Monday: 12:00 PM – 2:00 AM",
      // additional days
    ]
  },
  "keyword_match": "bar" // or club, lounge, pub, etc.
}
```

3. If your data structure differs, you may need to update the interfaces in `src/types/index.ts` and the filtering logic in `src/hooks/useVenueFilters.tsx`

## Adding More Venue Types

To add additional venue types:

1. Update the `VenueType` type in `src/types/index.ts`
2. Add new entries to `VENUE_TYPES`, `VENUE_TYPE_COLORS`, and `VENUE_TYPE_LABELS` arrays
3. The application will automatically include the new venue types in the filter panel

## Custom Map Styling

The application uses Mapbox's "dark-v11" style. To customize the map further:

1. Create a custom style in Mapbox Studio (https://studio.mapbox.com/)
2. Replace the style URL in `src/components/Map.tsx`:
   ```javascript
   map.current = new mapboxgl.Map({
     container: mapContainer.current,
     style: 'mapbox://styles/your-username/your-style-id',
     // other options...
   });
   ```

## Important Note

You will need to sign up for a Mapbox account and get your own access token to use this application. The placeholder token will not work for production use.
