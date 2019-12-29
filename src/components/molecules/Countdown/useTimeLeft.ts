import { useEffect, useState } from 'react';

export default function useTimeLeft(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });
  return timeLeft;
}

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
