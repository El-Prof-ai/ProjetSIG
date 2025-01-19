import React, { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval); // Nettoyage à la fin
  }, [targetDate]);

  if (timeRemaining.total <= 0) {
    return <div>Le compte à rebours est terminé !</div>;
  }

  return (
    <div>
      <h3>
        <div>
            <span>{timeRemaining.days} jours </span>
            <span>{timeRemaining.hours} heures </span>
            <span>{timeRemaining.minutes} minutes </span>
            <span>{timeRemaining.seconds} secondes</span>
        </div>
      </h3>
    </div>
  );
}

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export default CountdownTimer;
