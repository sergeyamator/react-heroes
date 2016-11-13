import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroCard from './components/HeroCard';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard}>
        <Route path="user/:id" component={HeroCard} />
      </Route>
      <Route path="heroes" component={Heroes} />
    </Route>
  </Router>,
  document.getElementById('app')
);
