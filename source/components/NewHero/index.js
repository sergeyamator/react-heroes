import React, { Component } from 'react';
import { connect } from 'react-redux';
import './new-hero.scss';


@connect()
export default class NewHero extends Component {
  constructor() {
    super();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.dispatch({
      type: 'NEW_HERO',
      name: this.input.value
    });

    this.props.router.goBack();
  };

  render() {
    return (
      <form className="new-hero" onSubmit={this.handleSubmit}>
        <label className="new-hero_label">
          <input
            placeholder="Enter hero's name"
            type="text"
            ref={el => this.input = el}
          />
        </label>

        <button type="submit" className="button">Save new hero</button>
      </form>
    );
  }
}