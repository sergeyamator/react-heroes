import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroCard from './components/HeroCard/';
import NewHero from './components/NewHero/';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
        <Route path="user/:id" component={HeroCard} />
      <Route path="heroes" component={Heroes} />
      <Route path="new-hero" component={NewHero}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
