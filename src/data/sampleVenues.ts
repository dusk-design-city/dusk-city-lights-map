
import { Venue } from '../types';

export const sampleVenues: Venue[] = [
  {
    place_id: "v1",
    name: "The Midnight Tavern",
    address: "123 Broome St, New York, NY 10002",
    location: {
      lat: 40.718651,
      lng: -73.992296
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0400"
          },
          open: {
            day: 0,
            time: "1800"
          }
        },
        {
          close: {
            day: 2,
            time: "0400"
          },
          open: {
            day: 1,
            time: "1800"
          }
        },
        {
          close: {
            day: 3,
            time: "0400"
          },
          open: {
            day: 2,
            time: "1800"
          }
        },
        {
          close: {
            day: 4,
            time: "0400"
          },
          open: {
            day: 3,
            time: "1800"
          }
        },
        {
          close: {
            day: 5,
            time: "0400"
          },
          open: {
            day: 4,
            time: "1800"
          }
        },
        {
          close: {
            day: 6,
            time: "0400"
          },
          open: {
            day: 5,
            time: "1800"
          }
        },
        {
          close: {
            day: 0,
            time: "0400"
          },
          open: {
            day: 6,
            time: "1800"
          }
        }
      ],
      weekday_text: [
        "Monday: 6:00 PM – 4:00 AM",
        "Tuesday: 6:00 PM – 4:00 AM",
        "Wednesday: 6:00 PM – 4:00 AM",
        "Thursday: 6:00 PM – 4:00 AM",
        "Friday: 6:00 PM – 4:00 AM",
        "Saturday: 6:00 PM – 4:00 AM",
        "Sunday: 6:00 PM – 4:00 AM"
      ]
    },
    keyword_match: "bar"
  },
  {
    place_id: "v2",
    name: "Velvet Lounge",
    address: "456 Grand St, New York, NY 10002",
    location: {
      lat: 40.715248,
      lng: -73.989084
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0200"
          },
          open: {
            day: 0,
            time: "2000"
          }
        },
        {
          close: {
            day: 2,
            time: "0200"
          },
          open: {
            day: 1,
            time: "2000"
          }
        },
        {
          close: {
            day: 3,
            time: "0200"
          },
          open: {
            day: 2,
            time: "2000"
          }
        },
        {
          close: {
            day: 4,
            time: "0200"
          },
          open: {
            day: 3,
            time: "2000"
          }
        },
        {
          close: {
            day: 5,
            time: "0300"
          },
          open: {
            day: 4,
            time: "2000"
          }
        },
        {
          close: {
            day: 6,
            time: "0300"
          },
          open: {
            day: 5,
            time: "2000"
          }
        },
        {
          close: {
            day: 0,
            time: "0200"
          },
          open: {
            day: 6,
            time: "2000"
          }
        }
      ],
      weekday_text: [
        "Monday: 8:00 PM – 2:00 AM",
        "Tuesday: 8:00 PM – 2:00 AM",
        "Wednesday: 8:00 PM – 2:00 AM",
        "Thursday: 8:00 PM – 2:00 AM",
        "Friday: 8:00 PM – 3:00 AM",
        "Saturday: 8:00 PM – 3:00 AM",
        "Sunday: 8:00 PM – 2:00 AM"
      ]
    },
    keyword_match: "lounge"
  },
  {
    place_id: "v3",
    name: "Neon Beats",
    address: "789 Bowery, New York, NY 10003",
    location: {
      lat: 40.724918,
      lng: -73.992814
    },
    opening_hours: {
      open_now: false,
      periods: [
        {
          close: {
            day: 5,
            time: "0500"
          },
          open: {
            day: 4,
            time: "2300"
          }
        },
        {
          close: {
            day: 6,
            time: "0500"
          },
          open: {
            day: 5,
            time: "2300"
          }
        },
        {
          close: {
            day: 0,
            time: "0500"
          },
          open: {
            day: 6,
            time: "2300"
          }
        }
      ],
      weekday_text: [
        "Monday: Closed",
        "Tuesday: Closed",
        "Wednesday: Closed",
        "Thursday: 11:00 PM – 5:00 AM",
        "Friday: 11:00 PM – 5:00 AM",
        "Saturday: 11:00 PM – 5:00 AM",
        "Sunday: Closed"
      ]
    },
    keyword_match: "club"
  },
  {
    place_id: "v4",
    name: "The Rustic Barrel",
    address: "111 Essex St, New York, NY 10002",
    location: {
      lat: 40.7184,
      lng: -73.9874
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0100"
          },
          open: {
            day: 0,
            time: "1200"
          }
        },
        {
          close: {
            day: 2,
            time: "0100"
          },
          open: {
            day: 1,
            time: "1200"
          }
        },
        {
          close: {
            day: 3,
            time: "0100"
          },
          open: {
            day: 2,
            time: "1200"
          }
        },
        {
          close: {
            day: 4,
            time: "0100"
          },
          open: {
            day: 3,
            time: "1200"
          }
        },
        {
          close: {
            day: 5,
            time: "0200"
          },
          open: {
            day: 4,
            time: "1200"
          }
        },
        {
          close: {
            day: 6,
            time: "0200"
          },
          open: {
            day: 5,
            time: "1200"
          }
        },
        {
          close: {
            day: 0,
            time: "0100"
          },
          open: {
            day: 6,
            time: "1200"
          }
        }
      ],
      weekday_text: [
        "Monday: 12:00 PM – 1:00 AM",
        "Tuesday: 12:00 PM – 1:00 AM",
        "Wednesday: 12:00 PM – 1:00 AM",
        "Thursday: 12:00 PM – 1:00 AM",
        "Friday: 12:00 PM – 2:00 AM",
        "Saturday: 12:00 PM – 2:00 AM",
        "Sunday: 12:00 PM – 1:00 AM"
      ]
    },
    keyword_match: "pub"
  },
  {
    place_id: "v5",
    name: "Skyline Lounge",
    address: "222 Delancey St, New York, NY 10002",
    location: {
      lat: 40.7173,
      lng: -73.9813
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0200"
          },
          open: {
            day: 0,
            time: "1700"
          }
        },
        {
          close: {
            day: 2,
            time: "0200"
          },
          open: {
            day: 1,
            time: "1700"
          }
        },
        {
          close: {
            day: 3,
            time: "0200"
          },
          open: {
            day: 2,
            time: "1700"
          }
        },
        {
          close: {
            day: 4,
            time: "0200"
          },
          open: {
            day: 3,
            time: "1700"
          }
        },
        {
          close: {
            day: 5,
            time: "0300"
          },
          open: {
            day: 4,
            time: "1700"
          }
        },
        {
          close: {
            day: 6,
            time: "0300"
          },
          open: {
            day: 5,
            time: "1700"
          }
        },
        {
          close: {
            day: 0,
            time: "0200"
          },
          open: {
            day: 6,
            time: "1700"
          }
        }
      ],
      weekday_text: [
        "Monday: 5:00 PM – 2:00 AM",
        "Tuesday: 5:00 PM – 2:00 AM",
        "Wednesday: 5:00 PM – 2:00 AM",
        "Thursday: 5:00 PM – 2:00 AM",
        "Friday: 5:00 PM – 3:00 AM",
        "Saturday: 5:00 PM – 3:00 AM",
        "Sunday: 5:00 PM – 2:00 AM"
      ]
    },
    keyword_match: "lounge"
  },
  {
    place_id: "v6",
    name: "The Downtown Speakeasy",
    address: "333 Lafayette St, New York, NY 10012",
    location: {
      lat: 40.7272,
      lng: -73.9947
    },
    opening_hours: {
      open_now: false,
      periods: [
        {
          close: {
            day: 1,
            time: "0200"
          },
          open: {
            day: 0,
            time: "1800"
          }
        },
        {
          close: {
            day: 2,
            time: "0200"
          },
          open: {
            day: 1,
            time: "1800"
          }
        },
        {
          close: {
            day: 3,
            time: "0200"
          },
          open: {
            day: 2,
            time: "1800"
          }
        },
        {
          close: {
            day: 4,
            time: "0200"
          },
          open: {
            day: 3,
            time: "1800"
          }
        },
        {
          close: {
            day: 5,
            time: "0300"
          },
          open: {
            day: 4,
            time: "1800"
          }
        },
        {
          close: {
            day: 6,
            time: "0300"
          },
          open: {
            day: 5,
            time: "1800"
          }
        },
        {
          close: {
            day: 0,
            time: "0200"
          },
          open: {
            day: 6,
            time: "1800"
          }
        }
      ],
      weekday_text: [
        "Monday: 6:00 PM – 2:00 AM",
        "Tuesday: 6:00 PM – 2:00 AM",
        "Wednesday: 6:00 PM – 2:00 AM",
        "Thursday: 6:00 PM – 2:00 AM",
        "Friday: 6:00 PM – 3:00 AM",
        "Saturday: 6:00 PM – 3:00 AM",
        "Sunday: 6:00 PM – 2:00 AM"
      ]
    },
    keyword_match: "bar"
  },
  {
    place_id: "v7",
    name: "Rhythm & Booze",
    address: "444 Spring St, New York, NY 10013",
    location: {
      lat: 40.7252,
      lng: -74.0037
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0400"
          },
          open: {
            day: 0,
            time: "2000"
          }
        },
        {
          close: {
            day: 2,
            time: "0400"
          },
          open: {
            day: 1,
            time: "2000"
          }
        },
        {
          close: {
            day: 3,
            time: "0400"
          },
          open: {
            day: 2,
            time: "2000"
          }
        },
        {
          close: {
            day: 4,
            time: "0400"
          },
          open: {
            day: 3,
            time: "2000"
          }
        },
        {
          close: {
            day: 5,
            time: "0400"
          },
          open: {
            day: 4,
            time: "2000"
          }
        },
        {
          close: {
            day: 6,
            time: "0400"
          },
          open: {
            day: 5,
            time: "2000"
          }
        },
        {
          close: {
            day: 0,
            time: "0400"
          },
          open: {
            day: 6,
            time: "2000"
          }
        }
      ],
      weekday_text: [
        "Monday: 8:00 PM – 4:00 AM",
        "Tuesday: 8:00 PM – 4:00 AM",
        "Wednesday: 8:00 PM – 4:00 AM",
        "Thursday: 8:00 PM – 4:00 AM",
        "Friday: 8:00 PM – 4:00 AM",
        "Saturday: 8:00 PM – 4:00 AM",
        "Sunday: 8:00 PM – 4:00 AM"
      ]
    },
    keyword_match: "club"
  },
  {
    place_id: "v8",
    name: "Hudson Heights",
    address: "555 Hudson St, New York, NY 10014",
    location: {
      lat: 40.7352,
      lng: -74.0063
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0000"
          },
          open: {
            day: 0,
            time: "1600"
          }
        },
        {
          close: {
            day: 2,
            time: "0000"
          },
          open: {
            day: 1,
            time: "1600"
          }
        },
        {
          close: {
            day: 3,
            time: "0000"
          },
          open: {
            day: 2,
            time: "1600"
          }
        },
        {
          close: {
            day: 4,
            time: "0000"
          },
          open: {
            day: 3,
            time: "1600"
          }
        },
        {
          close: {
            day: 5,
            time: "0200"
          },
          open: {
            day: 4,
            time: "1600"
          }
        },
        {
          close: {
            day: 6,
            time: "0200"
          },
          open: {
            day: 5,
            time: "1600"
          }
        },
        {
          close: {
            day: 0,
            time: "0000"
          },
          open: {
            day: 6,
            time: "1600"
          }
        }
      ],
      weekday_text: [
        "Monday: 4:00 PM – 12:00 AM",
        "Tuesday: 4:00 PM – 12:00 AM",
        "Wednesday: 4:00 PM – 12:00 AM",
        "Thursday: 4:00 PM – 12:00 AM",
        "Friday: 4:00 PM – 2:00 AM",
        "Saturday: 4:00 PM – 2:00 AM",
        "Sunday: 4:00 PM – 12:00 AM"
      ]
    },
    keyword_match: "lounge"
  },
  {
    place_id: "v9",
    name: "The Old Tavern",
    address: "666 West Broadway, New York, NY 10012",
    location: {
      lat: 40.7282,
      lng: -74.0012
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0200"
          },
          open: {
            day: 0,
            time: "1100"
          }
        },
        {
          close: {
            day: 2,
            time: "0200"
          },
          open: {
            day: 1,
            time: "1100"
          }
        },
        {
          close: {
            day: 3,
            time: "0200"
          },
          open: {
            day: 2,
            time: "1100"
          }
        },
        {
          close: {
            day: 4,
            time: "0200"
          },
          open: {
            day: 3,
            time: "1100"
          }
        },
        {
          close: {
            day: 5,
            time: "0300"
          },
          open: {
            day: 4,
            time: "1100"
          }
        },
        {
          close: {
            day: 6,
            time: "0300"
          },
          open: {
            day: 5,
            time: "1100"
          }
        },
        {
          close: {
            day: 0,
            time: "0200"
          },
          open: {
            day: 6,
            time: "1100"
          }
        }
      ],
      weekday_text: [
        "Monday: 11:00 AM – 2:00 AM",
        "Tuesday: 11:00 AM – 2:00 AM",
        "Wednesday: 11:00 AM – 2:00 AM",
        "Thursday: 11:00 AM – 2:00 AM",
        "Friday: 11:00 AM – 3:00 AM",
        "Saturday: 11:00 AM – 3:00 AM",
        "Sunday: 11:00 AM – 2:00 AM"
      ]
    },
    keyword_match: "pub"
  },
  {
    place_id: "v10",
    name: "Downtown Bistro",
    address: "777 Centre St, New York, NY 10013",
    location: {
      lat: 40.7195,
      lng: -74.0023
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0000"
          },
          open: {
            day: 0,
            time: "1700"
          }
        },
        {
          close: {
            day: 2,
            time: "0000"
          },
          open: {
            day: 1,
            time: "1700"
          }
        },
        {
          close: {
            day: 3,
            time: "0000"
          },
          open: {
            day: 2,
            time: "1700"
          }
        },
        {
          close: {
            day: 4,
            time: "0000"
          },
          open: {
            day: 3,
            time: "1700"
          }
        },
        {
          close: {
            day: 5,
            time: "0100"
          },
          open: {
            day: 4,
            time: "1700"
          }
        },
        {
          close: {
            day: 6,
            time: "0100"
          },
          open: {
            day: 5,
            time: "1700"
          }
        },
        {
          close: {
            day: 0,
            time: "0000"
          },
          open: {
            day: 6,
            time: "1700"
          }
        }
      ],
      weekday_text: [
        "Monday: 5:00 PM – 12:00 AM",
        "Tuesday: 5:00 PM – 12:00 AM",
        "Wednesday: 5:00 PM – 12:00 AM",
        "Thursday: 5:00 PM – 12:00 AM",
        "Friday: 5:00 PM – 1:00 AM",
        "Saturday: 5:00 PM – 1:00 AM",
        "Sunday: 5:00 PM – 12:00 AM"
      ]
    },
    keyword_match: "restaurant"
  },
  {
    place_id: "v11",
    name: "The Neon Room",
    address: "888 Elizabeth St, New York, NY 10012",
    location: {
      lat: 40.7215,
      lng: -73.9958
    },
    opening_hours: {
      open_now: false,
      periods: [
        {
          close: {
            day: 5,
            time: "0400"
          },
          open: {
            day: 4,
            time: "2200"
          }
        },
        {
          close: {
            day: 6,
            time: "0400"
          },
          open: {
            day: 5,
            time: "2200"
          }
        },
        {
          close: {
            day: 0,
            time: "0400"
          },
          open: {
            day: 6,
            time: "2200"
          }
        }
      ],
      weekday_text: [
        "Monday: Closed",
        "Tuesday: Closed",
        "Wednesday: Closed",
        "Thursday: 10:00 PM – 4:00 AM",
        "Friday: 10:00 PM – 4:00 AM",
        "Saturday: 10:00 PM – 4:00 AM",
        "Sunday: Closed"
      ]
    },
    keyword_match: "club"
  },
  {
    place_id: "v12",
    name: "Whiskey & Wine",
    address: "999 Canal St, New York, NY 10013",
    location: {
      lat: 40.7204,
      lng: -74.0061
    },
    opening_hours: {
      open_now: true,
      periods: [
        {
          close: {
            day: 1,
            time: "0200"
          },
          open: {
            day: 0,
            time: "1600"
          }
        },
        {
          close: {
            day: 2,
            time: "0200"
          },
          open: {
            day: 1,
            time: "1600"
          }
        },
        {
          close: {
            day: 3,
            time: "0200"
          },
          open: {
            day: 2,
            time: "1600"
          }
        },
        {
          close: {
            day: 4,
            time: "0200"
          },
          open: {
            day: 3,
            time: "1600"
          }
        },
        {
          close: {
            day: 5,
            time: "0300"
          },
          open: {
            day: 4,
            time: "1600"
          }
        },
        {
          close: {
            day: 6,
            time: "0300"
          },
          open: {
            day: 5,
            time: "1400"
          }
        },
        {
          close: {
            day: 0,
            time: "0200"
          },
          open: {
            day: 6,
            time: "1400"
          }
        }
      ],
      weekday_text: [
        "Monday: 4:00 PM – 2:00 AM",
        "Tuesday: 4:00 PM – 2:00 AM",
        "Wednesday: 4:00 PM – 2:00 AM",
        "Thursday: 4:00 PM – 2:00 AM",
        "Friday: 4:00 PM – 3:00 AM",
        "Saturday: 2:00 PM – 3:00 AM",
        "Sunday: 2:00 PM – 2:00 AM"
      ]
    },
    keyword_match: "bar"
  }
];

export default sampleVenues;
