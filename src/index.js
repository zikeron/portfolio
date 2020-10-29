import React from 'react';
import { render } from 'react-dom';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('app');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  app
);

serviceWorker.register();
