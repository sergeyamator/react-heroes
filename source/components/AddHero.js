import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addHero } from '../actions';

const ENTER_KEY = 13;

@connect(undefined, { addHero })
export default class AddTodo extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  state = {
    text: " "
  };

  handleNameChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this.props.addHero(this.state.name);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <div className={}>
        <input
          className={}
          type="text"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleNameChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}