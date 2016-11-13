import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './hero-card.scss';

@connect(mapStateToProps)
export default class HeroCard extends Component {
  handleDeleteHero = e => {
    e.preventDefault();

    this.props.dispatch({
      type: 'HERO_DELETE',
      id: this.props.params.id
    });
    
    this.props.router.goBack();
  };

  render() {
    const {params, heroes, dispatch} = this.props;
    const currentUser = heroes.filter((hero) => hero.id == params.id);

    return (
      <div className="hero-card">
        <h2>{currentUser[0].name} details</h2>
        <div className="hero-card_container">
          <div className="hero-card_wrapper">
            <span className="hero-card_text-label">id</span>
            <span className="hero-card_text-value">{currentUser[0].id}</span>
          </div>
          <label className="hero-card_wrapper">
            <span className="hero-card_text-label">name</span>
            <input
              className="hero-card_text-value"
              type="text" value={currentUser[0].name}
              onChange={e =>
                dispatch({
                  type: 'EDIT_HERO',
                  target: e,
                  id: currentUser[0].id
                })
              }
            />
          </label>
        </div>
        <Link to="/" className="button">Back</Link>
        <a className="button button--delete" onClick={this.handleDeleteHero}>Delete Hero</a>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    heroes: state
  }
}
