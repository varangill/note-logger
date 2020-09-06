import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({authenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        authenticated ? (
            <Redirect to="/main" />
        ) :  (
            <Component {...props} />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    authenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);