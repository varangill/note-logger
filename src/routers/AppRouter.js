import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import EntryDashboardPage from '../components/EntryDashboardPage';
import AddEntryPage from '../components/AddEntryPage';
import EditEntryPage from '../components/EditEntryPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={EntryDashboardPage} exact={true} />
        <Route path="/create" component={AddEntryPage} />
        <Route path="/edit/:id" component={EditEntryPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
