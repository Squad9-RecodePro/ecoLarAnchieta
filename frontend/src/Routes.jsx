import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserLogin from './pages/UserLogin';

import RegisterUser from './pages/RegisterUser';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/RegisterUser" component={RegisterUser} />
        </Switch>
    </BrowserRouter>
);

export default Routes;