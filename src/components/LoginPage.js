import React from 'react'
import {connect} from 'react-redux';
import {initLogin} from '../actions/auth'

export const LoginPage = ({initLogin}) => (
    <div className="box-layout">
        <div className="box-layout__menu">
            <h1 className="box-layout__title">Note Logger</h1>
            <p>An app that lets you log and keep track of notes.</p>
            <button onClick={initLogin} className="button">Login via Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    initLogin: () => dispatch(initLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);