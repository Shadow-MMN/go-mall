"use client"
import { useState, useEffect, useRef } from 'react';

export default function CountdownTimer({ 
  targetDate, 
  restartOnComplete = false, 
  restartDuration = 3 * 24 * 60 * 60 * 1000, // 3 days
  onComplete = () => {} 
}) {
  // Refs to store props without triggering re-renders
  const targetDateRef = useRef(targetDate);
  const restartOnCompleteRef = useRef(restartOnComplete);
  const restartDurationRef = useRef(restartDuration);
  const onCompleteRef = useRef(onComplete);
  
  // Flag to track if timer is complete in current cycle
  const isCompletedRef = useRef(false);
  
  // Store the end date as a ref
  const endDateRef = useRef(null);
  
  // Time left state
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  
  // Initialize the end date only once on mount
  useEffect(() => {
    endDateRef.current = targetDateRef.current 
      ? new Date(targetDateRef.current) 
      : new Date(Date.now() + restartDurationRef.current);
  }, []);
  
  // Update refs when props change
  useEffect(() => {
    targetDateRef.current = targetDate;
    
    // Only reset the end date if the targetDate actually changed
    if (targetDate && targetDate !== targetDateRef.current) {
      endDateRef.current = new Date(targetDate);
      isCompletedRef.current = false;
    }
  }, [targetDate]);
  
  useEffect(() => {
    restartOnCompleteRef.current = restartOnComplete;
  }, [restartOnComplete]);
  
  useEffect(() => {
    restartDurationRef.current = restartDuration;
  }, [restartDuration]);
  
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  // The main timer effect - with empty dependency array
  useEffect(() => {
    // Make sure end date is initialized
    if (!endDateRef.current) {
      endDateRef.current = targetDateRef.current 
        ? new Date(targetDateRef.current) 
        : new Date(Date.now() + restartDurationRef.current);
    }
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDateRef.current - now;
      
      if (difference <= 0) {
        // Timer completed
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        
        // Only call onComplete once per countdown cycle
        if (!isCompletedRef.current) {
          isCompletedRef.current = true;
          
          // Call onComplete callback
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
          
          // If restart is enabled, set a new end date
          if (restartOnCompleteRef.current) {
            setTimeout(() => {
              endDateRef.current = new Date(Date.now() + restartDurationRef.current);
              isCompletedRef.current = false;
            }, 1000); // Slight delay to prevent immediate recalculation
          }
        }
      } else {
        // Timer still counting
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
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Set up interval
    const timerInterval = setInterval(calculateTimeLeft, 1000);
    
    // Clean up
    return () => {
      clearInterval(timerInterval);
    };
  }, []); // Empty dependency array is intentional
  
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