import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import './app.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Layout} />
      </Switch>
    </BrowserRouter>
  );
};
