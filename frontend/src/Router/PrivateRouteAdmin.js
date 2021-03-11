import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRouteAdmin = props => {
    const isLogged = !!localStorage.getItem('admin-token')
    return isLogged ? <Route {...props} /> : <Redirect to="/AdminLogin" />
}

export default PrivateRouteAdmin;