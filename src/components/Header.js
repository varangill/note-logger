import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {initLogout} from '../actions/auth';

export const Header = ({initLogout}) => (
  <header>
    <h1>NoteLogger</h1>
    <NavLink to="/main" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Entry</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={initLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  initLogout: () => dispatch(initLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
