import React, { Component } from 'react';

export default class HeroCard extends Component {
  render() {
    const {hero} = this.props;

    return (
      <div className="hero-card">
        <h2>{hero.name} details</h2>
        <div>
          <div className="hero-card_id">{hero.id}</div>
        </div>
        <label>
          <input type="text" value={hero.name} />
        </label>
      </div>
    );
  }
};

