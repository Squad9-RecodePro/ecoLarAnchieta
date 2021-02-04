import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import RegisterUser from './pages/RegisterUser';
import AdminStart from './pages/AdminStart';
import MainPage from './pages/MainPage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/RegisterUser" component={RegisterUser} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <Route path="/AdminStart" component={AdminStart} />   
        </Switch>
    </BrowserRouter>
);

export default Routes;