"use client"
import { useState, useEffect, useRef } from 'react';

export default function CountdownTimer({ 
  targetDate, 
  restartOnComplete = false, 
  restartDuration = 3 * 24 * 60 * 60 * 1000, // 3 days
  onComplete = () => {} 
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  
  // Use useRef to persist values without causing re-renders
  const endDateRef = useRef(
    targetDate ? new Date(targetDate) : new Date(Date.now() + restartDuration)
  );
  
  // Use a ref to track completion to avoid re-renders
  const completedRef = useRef(false);
  
  // Store callback in a ref to avoid dependency changes
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  // Store restart settings in refs
  const restartOnCompleteRef = useRef(restartOnComplete);
  const restartDurationRef = useRef(restartDuration);
  
  useEffect(() => {
    restartOnCompleteRef.current = restartOnComplete;
    restartDurationRef.current = restartDuration;
  }, [restartOnComplete, restartDuration]);
  
  // Handle initial targetDate changes
  useEffect(() => {
    if (targetDate) {
      endDateRef.current = new Date(targetDate);
      completedRef.current = false;
    }
  }, [targetDate]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDateRef.current - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });

        // Only call onComplete once per countdown cycle
        if (!completedRef.current) {
          completedRef.current = true;
          onCompleteRef.current();

          if (restartOnCompleteRef.current) {
            // Set a new end date for restart
            endDateRef.current = new Date(Date.now() + restartDurationRef.current);
            completedRef.current = false;
          }
        }
        
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    calculateTimeLeft(); // run once immediately

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array as we're using refs for dynamic values

  return (
    <div className="flex items-center justify-center p-6 font-sans">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase mb-1">Days</span>
          <span className="text-4xl font-bold">{timeLeft.days}</span>
        </div>
        
        <span className="text-4xl font-light text-red-500 mx-2">:</span>
        
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase mb-1">Hours</span>
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
        </div>
        
        <span className="text-4xl font-light text-red-500 mx-2">:</span>
        
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase mb-1">Minutes</span>
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
        </div>
        
        <span className="text-4xl font-light text-red-500 mx-2">:</span>
        
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase mb-1">Seconds</span>
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
}