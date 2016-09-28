import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

// import semantic UI
import '../vendor/css/button.min.css';
import '../vendor/css/card.min.css';
import '../vendor/css/container.min.css';
import '../vendor/css/dropdown.min.css';
import '../vendor/css/grid.min.css';
import '../vendor/css/header.min.css';
import '../vendor/css/icon.min.css';
import '../vendor/css/input.min.css';
import '../vendor/css/message.min.css';
import '../vendor/css/reset.min.css';
import '../vendor/css/search.min.css';
import '../vendor/css/segment.min.css';
import '../vendor/css/site.min.css';
import '../vendor/css/transition.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
