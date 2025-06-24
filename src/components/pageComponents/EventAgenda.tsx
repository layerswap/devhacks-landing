import React, { useState, useEffect } from 'react';

const EventAgenda = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const agendaData = [
    {
      date: "2025-06-24",
      day: "July 4",
      events: [
        { time: "10:00", activity: "Registration", desc: "Mark your entry to the competition" },
        { time: "13:00", activity: "Welcome Speech", desc: "Opening ceremony and guidelines" },
        { time: "14:00", activity: "Lunch", desc: "Networking and team building" },
        { time: "20:00", activity: "Dinner", desc: "Evening meal and socializing" }
      ]
    },
    {
      date: "2025-07-05",
      day: "July 5",
      events: [
        { time: "08:00", activity: "Breakfast", desc: "Start your day with energy" },
        { time: "14:00", activity: "Lunch", desc: "Midday meal and rest" },
        { time: "18:00", activity: "Submission Opens", desc: "Begin submitting your projects" },
        { time: "20:00", activity: "Dinner", desc: "Evening feast and discussions" }
      ]
    },
    {
      date: "2025-07-06",
      day: "July 6",
      events: [
        { time: "08:00", activity: "Breakfast", desc: "Final day begins" },
        { time: "09:30", activity: "Submission Deadline", desc: "Last chance to submit" },
        { time: "10:00", activity: "Demo Sessions", desc: "Present your creations" },
        { time: "12:00", activity: "Coffee Break & Lunch", desc: "Refreshments and networking" },
        { time: "12:30", activity: "Demo Sessions", desc: "Continued presentations" },
        { time: "14:00", activity: "Code Review", desc: "Expert evaluation of projects" },
        { time: "14:30", activity: "Final Selection", desc: "Judges make their decision" },
        { time: "15:00", activity: "Transfer to Main Venue", desc: "Move to announcement venue" },
        { time: "16:00", activity: "Announcement", desc: "Winners revealed and celebration" }
      ]
    }
  ];

  const isEventActive = (eventDate: string, eventTime: string) => {
    const eventDateTime = new Date(`${eventDate}T${eventTime}:00`);
    const currentDateTime = currentTime;
    
    // Check if the event is currently happening (within 1 hour window)
    const timeDiff = currentDateTime.getTime() - eventDateTime.getTime();
    return timeDiff >= 0 && timeDiff <= 3600000; // 1 hour in milliseconds
  };

  const isEventUpcoming = (eventDate: string, eventTime: string) => {
    const eventDateTime = new Date(`${eventDate}T${eventTime}:00`);
    const currentDateTime = currentTime;
    
    // Check if event is within next 2 hours
    const timeDiff = eventDateTime.getTime() - currentDateTime.getTime();
    return timeDiff > 0 && timeDiff <= 7200000; // 2 hours in milliseconds
  };

  const FireRing = () => (
    <div className="flex justify-center my-6 sm:my-8">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 sm:border-4 border-primary/50 relative">
          {/* Inner ring with gradient */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 animate-pulse">
            {/* Fire effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-conic from-primary/60 via-primary/80 to-primary/60 opacity-70"></div>
          </div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
        </div>
        {/* Glowing effect */}
        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 blur-lg sm:blur-xl"></div>
      </div>
    </div>
  );

  const TowerFloor = ({ event, eventDate, isLast }: any) => {
    const isActive = isEventActive(eventDate, event.time);
    const isUpcoming = isEventUpcoming(eventDate, event.time);
    
    return (
      <>
        <div className={`relative group ${isActive ? 'z-10' : ''}`}>
          {/* Floor base */}
          <div className={`
            relative bg-darkblue-800 bg-opacity-50 backdrop-blur-md 
            border-2 transition-all duration-300 group-hover:bg-opacity-70
            ${isActive 
              ? 'border-primary bg-primary/10 shadow-lg shadow-primary/25 animate-pulse' 
              : isUpcoming 
                ? 'border-primary/60 bg-primary/5' 
                : 'border-darkblue-600'
            }
          `}>
            {/* Tower floor content */}
            <div className="flex flex-col sm:flex-row sm:items-center min-h-[80px] p-3 sm:p-4 gap-3 sm:gap-0">
              {/* Left side - Time */}
              <div className={`
                w-full sm:w-20 text-center sm:text-center font-bold text-base sm:text-lg 
                border-b-2 sm:border-b-0 sm:border-r-2 pb-2 sm:pb-0 pr-0 sm:pr-4 mr-0 sm:mr-4
                ${isActive 
                  ? 'text-primary border-primary' 
                  : isUpcoming 
                    ? 'text-primary/80 border-primary/60' 
                    : 'text-white border-darkblue-600'
                }
              `}>
                {event.time}
              </div>
              
              {/* Right side - Activity */}
              <div className="flex-1">
                <h3 className={`
                  font-semibold text-base sm:text-lg mb-1
                  ${isActive ? 'text-primary' : 'text-white'}
                `}>
                  {event.activity}
                </h3>
                <p className={`
                  text-xs sm:text-sm
                  ${isActive ? 'text-primary/80' : 'text-darkblue-100'}
                `}>
                  {event.desc}
                </p>
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute right-3 sm:right-4 top-3 sm:top-1/2 sm:transform sm:-translate-y-1/2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            
            {/* Tower floor depth effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-darkblue-700/20 to-transparent opacity-50"></div>
          </div>
          
          {/* Connection line to next floor */}
          {!isLast && (
            <div className="flex justify-center">
              <div className="w-1 h-4 bg-darkblue-600"></div>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <section className="py-12 sm:pb-16 lg:pb-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-primary">
            COMBAT TOWER
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-darkblue-100 px-4">
            Ascend through the levels of the ultimate coding challenge
          </p>
        </div>

        {/* Tower Structure */}
        <div className="relative max-w-2xl mx-auto">
          {/* Tower top */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-16 bg-gradient-to-b from-primary/60 to-primary/80 relative" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)'}}>
                <div className="absolute inset-0 bg-primary/20 blur-sm"></div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-2 h-4 bg-primary"></div>
            </div>
          </div>

          {/* Tower floors by day */}
          {agendaData.map((dayData, dayIndex) => (
            <div key={dayIndex} className="mb-8">
              {/* Day header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{dayData.day}</h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>

              {/* Day events */}
              <div className="space-y-2">
                {dayData.events.map((event, eventIndex) => (
                  <TowerFloor
                    key={eventIndex}
                    event={event}
                    eventDate={dayData.date}
                    isLast={eventIndex === dayData.events.length - 1}
                  />
                ))}
              </div>

              {/* Fire ring separator between days */}
              {dayIndex < agendaData.length - 1 && <FireRing />}
            </div>
          ))}

          {/* Tower base */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-md h-8 bg-gradient-to-t from-darkblue-800 to-darkblue-700 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 text-primary text-lg">
                ⚔️
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-darkblue-100">Currently Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
              <span className="text-darkblue-100">Upcoming Soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-darkblue-600 rounded-full"></div>
              <span className="text-darkblue-100">Scheduled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;