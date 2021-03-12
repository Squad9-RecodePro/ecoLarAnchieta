import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRouteUser = props => {
    const isLogged = !!localStorage.getItem('user-token')
    return isLogged ? <Route {...props} /> : <Redirect to="/UserLogin" />
}


export default PrivateRouteUser;