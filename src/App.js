import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Terminal from './components/Terminal';
import Resume from './components/resume/Resume';

const App = () => (
  <Switch>
    <Route exact path="/resume" component={Resume} />
    <Route path="/" component={Terminal} />
  </Switch>
);

export default App;
