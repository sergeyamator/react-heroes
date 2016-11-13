import React, { Component } from 'react';

import './styles.scss';

export default class Button extends Component {
  render() {
    const {href, children, className} = this.props;

    return(
      <a className={className} href={href}>{children}</a>
    );
  }
}