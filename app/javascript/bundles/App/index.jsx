import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from '../App/pages/About';
import Home from '../App/pages/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </BrowserRouter>
)

export default App;
