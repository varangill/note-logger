import React from 'react'
import {connect} from 'react-redux';
import {initLogin} from '../actions/auth'

export const LoginPage = ({initLogin}) => (
    <div>
        <button onClick={initLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    initLogin: () => dispatch(initLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);