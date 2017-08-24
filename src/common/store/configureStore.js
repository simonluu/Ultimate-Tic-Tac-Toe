import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware()
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;