import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('user-token')
    return isLogged ? <Route {...props} /> : <Redirect to="/UserLogin" />
}


export default PrivateRoute;