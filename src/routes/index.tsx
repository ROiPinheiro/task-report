import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

export default function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route>
            <h1>404 - Page not found</h1>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
