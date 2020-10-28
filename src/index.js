import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';

let vh = window.innerHeight * 0.01;
console.log('vh', vh);
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.getElementById('app'));
