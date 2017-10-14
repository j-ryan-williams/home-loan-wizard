import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import Store from './store';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Provider store={Store} >
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
  registerServiceWorker();
