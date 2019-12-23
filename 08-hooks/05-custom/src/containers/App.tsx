import React, { FC, useEffect, useState } from 'react';

import AppComponent from '../components/App';

const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => {
    setTimeLeft(limitSec);
  };

  useEffect(() => {
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [limitSec]);

  return [timeLeft, reset];
};

const AppContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <AppComponent timeLeft={timeLeft} reset={reset} />;
};

export default AppContainer;
