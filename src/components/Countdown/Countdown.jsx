import React, { useState, useEffect } from 'react';
import "./Countdown.css"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2023-12-15T00:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % 1000) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div>{timeLeft.days} Days</div>
      <div>{timeLeft.hours} Hours</div>
      <div>{timeLeft.minutes} Minutes</div>
      <div>{timeLeft.seconds} Seconds</div>
    </div>
  );
};

export default Countdown;
