import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

const App: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default App;
