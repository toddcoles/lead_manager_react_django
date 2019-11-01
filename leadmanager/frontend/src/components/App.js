import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider, positions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
// import Alerts from './layout/Alerts';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';
import store from '../store';

// Alert options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_RIGHT,
  transition: 'scale' // can also use 'fade'
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <div className="container">
              <Dashboard />
              <Alerts />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
