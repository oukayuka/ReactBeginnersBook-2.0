import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './components/Home';
import Characters from './components/Characters';

import './App.css';

const App: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/characters/:code" component={Characters} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
