import React from 'react';
import { render } from 'react-dom';
import { App } from './containers/App';

const app = document.getElementById('app');

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  app,
);
