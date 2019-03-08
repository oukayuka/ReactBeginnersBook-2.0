import React, { FC, useEffect, useState } from 'react';

import AppComponent from '../components/App';

const useTimer = (): [number, () => void] => {
  const LIMIT = 60;
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return [timeLeft, reset];
};

const AppContainer: FC = () => {
  const [timeLeft, reset] = useTimer();

  return <AppComponent timeLeft={timeLeft} reset={reset} />;
};

export default AppContainer;
