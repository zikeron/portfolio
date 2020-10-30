import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import './app.css';

export const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
