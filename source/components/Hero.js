import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Hero extends Component {
  render() {
    const {name, id, isIdShown} = this.props;

    return (
      <Link to={`/user/${id}`} className="heroes_link">
        <div className="heroes_hero">
          {isIdShown ? <div className="heroes_id">{id}</div> : null}
          <div className="heroes_name">{name}</div>
        </div>
      </Link>
    );
  }
};

