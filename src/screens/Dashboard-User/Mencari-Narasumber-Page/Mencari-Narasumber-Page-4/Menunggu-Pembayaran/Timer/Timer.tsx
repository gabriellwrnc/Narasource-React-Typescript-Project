import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TimerProps {
  totalSec: string;
  navigation: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  const [delay, setDelay] = useState(+Number(props.totalSec));
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  const navigate = useNavigate();
  if (minutes === 0 && seconds === 0) {
    navigate(props.navigation);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>
        {minutes}:{seconds}
      </span>
    </>
  );
};

export default Timer;
