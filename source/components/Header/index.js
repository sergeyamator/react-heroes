import React, { Component } from 'react';
import { Link } from 'react-router';

import './header.scss';

export default class Header extends Component {
  render() {
    return(
      <header className="heroes_header">
        <div className="heroes_title">Tour of Heroes</div>
        <nav className="heroes_navigation">
          <Link to="/dashboard" activeClassName="active" className="heroes_navigation-button">Dashboard</Link>
          <Link to="/heroes" activeClassName="active" className="heroes_navigation-button">Heroes</Link>
        </nav>
      </header>
    );
  }
}