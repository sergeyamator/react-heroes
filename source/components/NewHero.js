import React, { Component } from 'react';
import { connect } from 'react-redux';

const ENTER_KEY = 13;

@connect()
export default class NewHero extends Component {
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
      <div>
        <input
          type="text"
        />
      </div>
    );
  }
}