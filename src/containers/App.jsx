import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import bgImg from '../assets/bg-zikeron.jpeg';
import './app.css';

export const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
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
    </div>
  );
};
