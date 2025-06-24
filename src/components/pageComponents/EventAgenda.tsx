import React, { useState, useEffect } from 'react';
import DevLogo from '../../icons/DevLogo';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

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
      day: "Հուլիսի 4",
      events: [
        { time: "10:00", activity: "Մասնակիցների գրանցում" },
        { time: "11:00", activity: "Բացման խոսք և մրցույթի մեկնարկ" },
        { time: "14:00", activity: "Լանչ" },
        { time: "15:00", activity: "Հեքինգ" },
        { time: "20:00", activity: "Ընթրիք" },
        { time: "21:00", activity: "Հեքինգ" },
      ]
    },
    {
      date: "2025-07-05",
      day: "Հուլիսի 5",
      events: [
        { time: "08:00", activity: "Նախաճաշ" },
        { time: "09:00", activity: "Հեքինգ" },
        { time: "14:00", activity: "Լանչ" },
        { time: "15:00", activity: "Հեքինգ" },
        { time: "18:00", activity: "Նախագծերի հանձնման մեկնարկ" },
        { time: "20:00", activity: "Ընթրիք" },
        { time: "21:00", activity: "Հեքինգ" },
      ]
    },
    {
      date: "2025-07-06",
      day: "Հուլիսի 6",
      events: [
        { time: "08:00", activity: "Նախաճաշ" },
        { time: "09:30", activity: "Նախագծերի հանձնման վերջնաժամկետ" },
        { time: "10:00", activity: "Դեմո ներկայացումներ" },
        { time: "12:00", activity: "Սուրճի ընդմիջում և լանչ" },
        { time: "12:30", activity: "Դեմո ներկայացումներ (շարունակություն)" },
        { time: "14:00", activity: "Առաջատար նախագծերի code review" },
        { time: "14:30", activity: " Ժյուրիի հանդիպում և հաղթողների ընտրություն" },
        { time: "15:00", activity: "Տեղափոխում դեպի Tech Week Vanadzor-ի հիմնական վայր" },
        { time: "16:00", activity: "Հաղթողների հայտարարում և մրցանակաբաշխություն" }
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

  const TowerFloor = ({ event, eventDate, isLast }: any) => {
    const isActive = isEventActive(eventDate, event.time);

    return (
      <>
        <div className={`relative group ${isActive ? 'z-10' : ''}`}>
          {/* Floor base */}
          <div className={`
            relative bg-darkblue-800 bg-opacity-50 backdrop-blur-md 
            transition-all duration-300 group-hover:bg-opacity-70 rounded-xl
            ${isActive
              ? 'bg-primary/10 shadow-lg shadow-primary/25 border-2 border-primary'
              : ''
            }
          `}>
            {/* Tower floor content */}
            <div className="flex flex-col sm:flex-row sm:items-center min-h-[96px] p-3 sm:p-4 gap-3 sm:gap-0">
              {/* Left side - Time */}
              <div className='
                w-full sm:w-20 text-center sm:text-center font-bold text-base sm:text-lg 
                border-b-2 sm:border-b-0 sm:border-r-2 pb-2 sm:pb-0 pr-0 sm:pr-4 mr-0 sm:mr-4 text-white'>
                {event.time}
              </div>

              {/* Right side - Activity */}
              <div className="flex-1">
                <h3 className='font-semibold text-base sm:text-lg mb-1 text-white'>
                  {event.activity}
                </h3>
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
              <div className="w-1 h-6 "></div>
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
        <div className="flex justify-center mb-12 sm:mb-16">
          <DevLogo className='h-40 w-auto' />
        </div>
        <div className="relative bg-transparent bg-opacity-50 backdrop-blur-md rounded-xl min-h-[96px] p-3 sm:p-4 flex flex-col justify-center items-center my-6 mx-auto max-w-2xl">
          <p className="text-white text-sm sm:text-4xl  font-semibold pb-6">Մնաց</p>
          <FlipClockCountdown
            to={new Date('2025-07-04T06:00:00Z')}
            labels={['Օր', 'Ժամ', 'Րոպե', 'Վայրկյան']}
            labelStyle={{
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'uppercase',
              color: 'white'
            }}
            digitBlockStyle={{
              backgroundColor: '#252525',
              color: '#974DF7',
              fontSize: 32,
              borderRadius: 8
            }}
            dividerStyle={{ color: '#111100' }}
            separatorStyle={{ color: 'white' }}
            duration={0.6}
            hideOnComplete={true}
          />
        </div>
        {/* Tower Structure */}
        <div className="relative max-w-2xl mx-auto">
          {/* Tower top */}

          {/* Tower floors by day */}
          {agendaData.map((dayData, dayIndex) => (
            <div key={dayIndex} className="mb-8">
              {/* Day header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{dayData.day}</h2>
              </div>

              {/* Day events */}
              <div className="">
                {dayData.events.map((event, eventIndex) => (
                  <TowerFloor
                    key={eventIndex}
                    event={event}
                    eventDate={dayData.date}
                    isLast={eventIndex === dayData.events.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EventAgenda;