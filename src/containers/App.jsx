import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import './app.css';

export const App = () => {
  return (
    <Switch>
      <Route component={Layout} />
    </Switch>
  );
};
