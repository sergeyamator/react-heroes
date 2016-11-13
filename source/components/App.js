import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import '../assets/styles/app.scss';

import Header from './Header/';
import reducer from '../reducers';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="heroes">
          <Header />
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

