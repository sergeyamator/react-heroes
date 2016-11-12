import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

@connect(mapStateToProps)
export default class HeroesList extends Component {
  render() {
    return(
      <div className="heroes_list">
        {
          this.props.heroes.map(hero =>
            <Hero
              key={hero.id}
              id={hero.id}
              name={hero.text}
            />
          )
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    heroes: state
  }
}
