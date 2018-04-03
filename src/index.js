import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* Reactotron Config */
import 'config/reactotron';

/* Navigation Routes */
import Routes from 'routes';

import reducers from 'redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
