import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import HeroesList from './HeroesList';

@connect(mapStateToProps)
export default class Dashboard extends Component {
  render() {
    const { heroes } = this.props;
    return (
      <div>
        <h2>My Heroes</h2>
        <HeroesList heroes={heroes} classView="list" />
        <Link className="button" to="new-hero">Add new Hero</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state
  }
}