import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Alexa from 'alexa-sdk';

import configureStore from './common/store/configureStore';
import registerServiceWorker from './client/registerServiceWorker';

import App from './common/components/App';

import './client/styles/index.css';

export default (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('SayHello"');
  },
  'HelloWorldIntent': function () {
    this.emit('SayHello');
  },
  'SayHello': function () {
    this.emit(':tell', 'Hello World!');
  }
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
