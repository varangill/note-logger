import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {initLogout} from '../actions/auth';

export const Header = ({initLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__items">
        <Link className="header__title" to="/main">
          <h1>NoteLogger</h1>
        </Link>
        <button className="button button--logout"onClick={initLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  initLogout: () => dispatch(initLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
