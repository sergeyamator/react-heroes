import React, {Component} from 'react';

import Hero from './Hero';

export default class HeroesList extends Component {
  render() {
    const {heroes, classView} = this.props;
    const className = classView ? `heroes_list ${classView}` : 'heroes_list';

    return (
      <div className={className}>
        {
          heroes.map(hero =>
            <Hero
              isIdShown={classView !== 'dashboard'}
              key={hero.id}
              id={hero.id}
              name={hero.name}
            />
          )
        }
      </div>
    );
  }
};


