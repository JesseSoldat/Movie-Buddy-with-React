import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import SearchMoviesPage from '../components/SearchMoviesPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/search" component={SearchMoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;