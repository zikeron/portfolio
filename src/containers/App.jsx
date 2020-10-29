import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import './app.css';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Layout} />
      </Switch>
    </Router>
  );
};
