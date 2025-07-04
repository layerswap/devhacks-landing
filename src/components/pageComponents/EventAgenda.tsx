import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { MicVocal, Hamburger, LaptopMinimalCheck, Sandwich, Pizza, UserRoundPen, Coffee, BookUp, BookX, SquareDashedBottomCode, Trophy, Bus } from 'lucide-react';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const EventAgenda = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { width } = useWindowDimensions()
  const isMobile = width < 780
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const agendaData = [
    {
      date: "2025-07-04",
      day: "Հուլիսի 4",
      events: [
        { time: "10:00", activity: "Մասնակիցների գրանցում", icon: UserRoundPen },
        { time: "11:00", activity: "Բացման խոսք և մրցույթի մեկնարկ", icon: MicVocal },
        { time: "14:00", activity: "Լանչ", icon: Hamburger },
        { time: "15:00", activity: "Հեքինգ", icon: LaptopMinimalCheck },
        { time: "20:00", activity: "Ընթրիք", icon: Pizza },
        { time: "21:00", activity: "Հեքինգ", icon: LaptopMinimalCheck },
      ]
    },
    {
      date: "2025-07-05",
      day: "Հուլիսի 5",
      events: [
        { time: "08:30", activity: "Նախաճաշ", icon: Sandwich },
        { time: "09:30", activity: "Հեքինգ", icon: LaptopMinimalCheck },
        { time: "14:00", activity: "Լանչ", icon: Hamburger },
        { time: "15:00", activity: "Հեքինգ", icon: LaptopMinimalCheck },
        { time: "18:00", activity: "Նախագծերի հանձնման մեկնարկ", icon: BookUp },
        { time: "20:00", activity: "Ընթրիք", icon: Pizza },
        { time: "21:00", activity: "Հեքինգ", icon: LaptopMinimalCheck },
      ]
    },
    {
      date: "2025-07-06",
      day: "Հուլիսի 6",
      events: [
        { time: "08:30", activity: "Նախաճաշ", icon: Sandwich },
        { time: "10:00", activity: "Նախագծերի հանձնման վերջնաժամկետ", icon: BookX },
        { time: "10:30", activity: "Դեմո ներկայացումներ", icon: SquareDashedBottomCode },
        { time: "12:30", activity: "Սուրճի ընդմիջում և լանչ", icon: Coffee },
        { time: "13:00", activity: "Դեմո ներկայացումներ (շարունակություն)", icon: SquareDashedBottomCode },
        { time: "15:00", activity: "Հաղթողների ընտրություն", icon: Trophy },
        { time: "15:00", activity: "Մասնակիցների տեղափոխում Շառլ Ազնավուրի անվան մշակույթի պալատ", icon: Bus },
        { time: "16:50", activity: "Հաղթողների հայտարարում և մրցանակաբաշխություն", icon: MicVocal }
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
      <div className={`relative group ${isActive ? 'z-10' : ''}`}>
        {
          isActive &&
          <>
            <div className='absolute -left-[30px] -top-8'>
              <HornsSvg className="w-[80px] h-auto" />
            </div>
            <div className='absolute -right-[146px] top-0'>
              <TailSvg className="w-[200px] h-auto" />
            </div>
          </>
        }
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
            <div className='
                w-full sm:w-20 text-center sm:text-center font-bold text-base sm:text-lg 
                sm:border-b-0 sm:border-r-2 pb-2 sm:pb-0 pr-0 sm:pr-4 mr-0 sm:mr-4 text-primary'>
              {event.time}
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 text-white text-center sm:text-left max-w-full">
              {event.icon && (
                <span className="inline-block align-text-bottom w-5 h-5 mr-2">
                  <event.icon className="w-full h-full" />
                </span>
              )}
              <span>{event.activity}</span>
            </h3>

          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-darkblue-700/20 to-transparent opacity-50"></div>
        </div>
        {!isLast && (
          <div className="flex justify-center">
            <div className="w-1 h-6 "></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-12 sm:pb-16 lg:pb-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-12 sm:mb-16 text-6xl font-semibold">
          {/* <DevLogo className='h-40 w-auto' /> */}
          Օրակարգ
        </div>
        {/* Tower Structure */}
        <div className="relative max-w-2xl mx-auto">
          {/* Tower top */}

          {/* Tower floors by day */}
          {agendaData.map((dayData, dayIndex) => (
            <div key={dayIndex} className="mb-8">
              {/* Day header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  <span className="text-primary  font-[Georgia]  text-2xl sm:text-3xl font-extrabold">
                    {["I", "II", "III"][dayIndex]}
                  </span>
                  <span>{dayData.day}</span>
                </h2>
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

const HornsSvg = (props: any) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="92" height="84" viewBox="0 0 92 84" fill="none" {...props}>
    <path d="M34.0157 61.279C31.9495 61.6385 30.0023 61.3482 27.9845 60.7752C25.8022 60.4161 22.8571 59.5455 19.6084 57.2971C15.5217 54.4621 9.60481 49.2679 7.1512 39.6005L7.12644 39.5616C7.12644 39.5616 7.13619 39.5554 7.13882 39.5811C7.1265 39.7119 7.08423 40.2033 7.06857 41.1012C7.00384 43.4239 6.96389 48.9823 8.54482 54.3828C12.4463 67.7185 19.605 73.2969 30.659 76.6681C31.8469 77.0319 33.1295 77.3082 34.5614 77.4759C34.5684 77.444 34.5622 77.4342 34.5692 77.4023C34.61 77.4449 34.6373 77.5092 34.6373 77.5092C35.9876 77.1411 36.7376 75.8303 37.2595 74.1182C37.5518 73.1397 37.9068 72.2169 38.2007 70.8549C38.1883 70.8354 38.2016 70.8133 38.2016 70.8133C38.2977 70.192 38.3727 69.5158 38.4308 68.8777C38.5647 67.3717 38.5997 66.0106 38.5746 64.9199C38.4876 60.3851 37.3661 60.5118 37.0523 60.3837C35.9794 60.78 34.9685 61.1232 34.006 61.2852L34.0157 61.279Z" fill="#974DF7" />
    <path d="M67.8981 38.061C69.0799 36.3318 69.6218 34.441 69.9358 32.3684C70.5124 30.2353 70.9396 27.1961 70.2398 23.3087C69.3534 18.4157 67.0795 10.8789 59.3056 4.63267L59.2805 4.59401C59.2805 4.59401 59.2709 4.6003 59.2931 4.61334C59.4171 4.65647 59.8814 4.82216 60.7042 5.18091C62.8427 6.08684 67.9127 8.3593 72.1684 12.0398C82.6782 21.1261 84.7874 29.9515 83.2782 41.4014C83.1174 42.6325 82.8378 43.9133 82.3977 45.2848C82.3659 45.2779 82.3596 45.2682 82.3277 45.2614C82.3495 45.3161 82.3967 45.3676 82.3967 45.3676C81.5032 46.4424 80.0011 46.5797 78.2286 46.343C77.2181 46.2024 76.2322 46.1418 74.8723 45.8433C74.8597 45.8239 74.8341 45.8268 74.8341 45.8268C74.2294 45.6561 73.5837 45.4434 72.9795 45.2312C71.5548 44.7274 70.3029 44.1938 69.3217 43.718C65.2349 41.7552 65.8142 40.7883 65.8276 40.4498C66.6318 39.639 67.3622 38.8624 67.9077 38.0547L67.8981 38.061Z" fill="#974DF7" />
  </svg>
}

const TailSvg = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="353" height="192" viewBox="0 0 353 192" fill="none" {...props}>
      <path d="M352.376 191.489C352.301 191.065 352.027 189.595 351.578 187.477L351.528 187.427C350.357 181.62 347.74 170.481 343.952 157.921C340.09 145.137 335.006 130.932 328.676 119.618C326.782 116.154 324.789 112.989 322.695 110.124C322.695 110.124 323.543 116.379 321.823 125.524C321.549 127.269 321.15 129.113 320.652 130.957C320.577 131.331 320.452 131.73 320.328 132.054C319.157 136.689 317.163 141.623 314.297 146.856C314.123 147.18 313.898 147.529 313.699 147.878C304.179 140.975 275.421 128.914 235 128.914C226.278 128.914 216.983 129.487 207.214 130.783C167.167 136.116 105.738 159.192 67.41 159.192C46.6512 159.192 32.6708 152.439 32.4964 132.477C32.3718 118.547 44.2339 108.529 58.9619 99.0589C60.1581 98.3113 61.3543 97.5637 62.5754 96.7911C63.7716 96.0435 64.9927 95.3208 66.2138 94.5732C78.2753 87.2466 91.209 79.9698 100.554 71.148C101.9 69.877 103.146 68.6061 104.317 67.2604C105.588 65.8648 106.734 64.4194 107.756 62.9242C114.709 52.956 116.703 40.9693 109.177 25.2943C103.046 12.535 92.4052 4.48568 79.6459 0V33.518C80.9418 34.9385 81.8638 36.5334 82.2626 38.3028C83.1348 42.2153 82.9354 46.0779 80.6926 50.1151C79.9948 51.386 79.0977 52.657 77.9762 53.9777C77.1539 54.9247 76.2318 55.8717 75.1602 56.8436C69.4534 62.0769 60.0086 67.7089 45.1311 74.0886C44.0346 74.5621 42.9381 75.0355 41.7917 75.509C41.2435 75.7333 40.6952 75.9576 40.147 76.1819C39.499 76.456 38.876 76.7052 38.253 76.9793C7.97465 90.1623 -1.74434 114.908 0.249301 135.443C1.44548 147.753 13.1082 185.757 71.3723 185.757C129.636 185.757 150.246 153.136 234.402 146.632C237.841 146.358 241.205 146.233 244.495 146.233C272.505 146.233 293.887 155.279 304.304 160.787C303.681 161.485 303.083 162.182 302.435 162.855C298.647 166.668 294.236 170.456 288.903 173.895C288.18 174.443 287.508 174.917 286.735 175.415C282.025 178.406 276.717 181.272 270.636 183.863C270.636 183.863 274.15 184.212 279.857 184.735C295.806 186.231 328.826 189.321 346.619 191.115C348.812 191.314 350.781 191.489 352.425 191.638C352.425 191.638 352.409 191.589 352.376 191.489Z" fill="#974DF7" />
    </svg>
  )
}

export default EventAgenda;