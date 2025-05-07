
import React, { useState } from 'react';
import { DAYS_OF_WEEK } from '../types';
import { Clock } from 'lucide-react';

interface TimeFilterProps {
  day: number;
  hour: number;
  minute: number;
  onTimeChange: (day: number, hour: number, minute: number) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  day,
  hour,
  minute,
  onTimeChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format time to display
  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
  };

  // Get today and tomorrow
  const today = new Date().getDay();
  const tomorrow = (today + 1) % 7;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-nightlife-card border border-white/10 rounded-md hover:bg-nightlife-purple/10 transition-colors"
      >
        <Clock size={16} />
        <span>{DAYS_OF_WEEK[day]}, {formatTime(hour, minute)}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-nightlife-card border border-white/10 rounded-md shadow-lg z-10">
          <div className="p-2">
            <h3 className="font-medium mb-2 text-sm">Select Day</h3>
            <div className="grid grid-cols-4 gap-1 mb-4">
              {DAYS_OF_WEEK.map((dayName, idx) => (
                <button
                  key={idx}
                  onClick={() => onTimeChange(idx, hour, minute)}
                  className={`text-xs py-1 px-2 rounded ${
                    idx === day
                      ? 'bg-nightlife-purple text-white'
                      : 'bg-black/20 hover:bg-nightlife-purple/50 transition-colors'
                  } ${idx === today ? 'ring-1 ring-nightlife-amber' : ''}`}
                >
                  {idx === today ? 'Today' : idx === tomorrow ? 'Tomorrow' : dayName.slice(0, 3)}
                </button>
              ))}
            </div>

            <h3 className="font-medium mb-2 text-sm">Select Time</h3>
            <div className="grid grid-cols-4 gap-1">
              {[0, 3, 6, 9, 12, 15, 18, 21].map((h) => (
                <button
                  key={h}
                  onClick={() => onTimeChange(day, h, 0)}
                  className={`text-xs py-1 px-2 rounded ${
                    hour === h && minute === 0
                      ? 'bg-nightlife-purple text-white'
                      : 'bg-black/20 hover:bg-nightlife-purple/50 transition-colors'
                  }`}
                >
                  {formatTime(h, 0)}
                </button>
              ))}
              {[1, 4, 7, 10, 13, 16, 19, 22].map((h) => (
                <button
                  key={h}
                  onClick={() => onTimeChange(day, h, 0)}
                  className={`text-xs py-1 px-2 rounded ${
                    hour === h && minute === 0
                      ? 'bg-nightlife-purple text-white'
                      : 'bg-black/20 hover:bg-nightlife-purple/50 transition-colors'
                  }`}
                >
                  {formatTime(h, 0)}
                </button>
              ))}
              {[2, 5, 8, 11, 14, 17, 20, 23].map((h) => (
                <button
                  key={h}
                  onClick={() => onTimeChange(day, h, 0)}
                  className={`text-xs py-1 px-2 rounded ${
                    hour === h && minute === 0
                      ? 'bg-nightlife-purple text-white'
                      : 'bg-black/20 hover:bg-nightlife-purple/50 transition-colors'
                  }`}
                >
                  {formatTime(h, 0)}
                </button>
              ))}
            </div>

            <h3 className="font-medium my-2 text-sm">Quick Select</h3>
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => {
                  const now = new Date();
                  onTimeChange(now.getDay(), now.getHours(), now.getMinutes());
                }}
                className="text-xs py-1 px-2 rounded bg-nightlife-amber hover:bg-nightlife-amber/80 transition-colors"
              >
                Now
              </button>
              <button
                onClick={() => {
                  const now = new Date();
                  const laterToday = new Date();
                  laterToday.setHours(22, 0, 0);
                  
                  if (now.getHours() >= 22) {
                    // If it's already past 10 PM, set to tomorrow night
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(22, 0, 0);
                    onTimeChange(tomorrow.getDay(), 22, 0);
                  } else {
                    onTimeChange(now.getDay(), 22, 0);
                  }
                }}
                className="text-xs py-1 px-2 rounded bg-nightlife-purple/60 hover:bg-nightlife-purple/80 transition-colors"
              >
                Tonight (10 PM)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeFilter;
