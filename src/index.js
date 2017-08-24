import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './common/store/configureStore';
import registerServiceWorker from './client/registerServiceWorker';

import App from './common/components/App';

import './client/styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
