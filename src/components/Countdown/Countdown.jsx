import React, { useState, useEffect } from 'react';
import "./Countdown.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date('2025-02-14T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
        clearInterval(timer);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null; // Render nothing when the countdown is over.
  }

  return (
    <div className="countdown">
      <div className="countdown-unit">
        <div className="">{timeLeft.days}</div>
        <div className="">Days</div>
      </div>
      <div className="countdown-unit">
        <div className="">{timeLeft.hours}</div>
        <div className="">Hours</div>
      </div>
      <div className="countdown-unit">
        <div className="">{timeLeft.minutes}</div>
        <div className="">Minutes</div>
      </div>
      <div className="countdown-unit">
        <div className="">{timeLeft.seconds}</div>
        <div className="">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
