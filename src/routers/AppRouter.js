import React from 'react';
import initHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import EntryDashboardPage from '../components/EntryDashboardPage';
import AddEntryPage from '../components/AddEntryPage';
import EditEntryPage from '../components/EditEntryPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'

export const history = initHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/main" component={EntryDashboardPage} />
        <PrivateRoute path="/create" component={AddEntryPage} />
        <PrivateRoute path="/edit/:id" component={EditEntryPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
