import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/main.jsx';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Main />
  </Provider>
  , document.getElementById('app')
)
