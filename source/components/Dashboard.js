import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeroesList from './HeroesList';

@connect(mapStateToProps)
export default class Dashboard extends Component {
  render() {
    const { heroes } = this.props;
    return (
      <div>
        <h2>Top Heroes</h2>
        <HeroesList heroes={heroes} classView="dashboard" />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state
  }
}