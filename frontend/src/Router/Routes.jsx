import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserLogin from '../pages/UserLogin';
import AdminLogin from '../pages/AdminLogin';
import RegisterUser from '../pages/RegisterUser';
import MainPage from '../pages/MainPage';
import AdminPanel from '../pages/AdminPanel';
import UserPanel from '../pages/UserPanel';
import ResidentsAdmin from '../pages/ResidentsAdmin';
import VolunteerWorks from '../pages/VolunteerWorks';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import RegisterComplete from '../pages/RegisterComplete';
import Page404 from '../pages/Page404';
import PrivateRouteUser from './PrivateRouteUser';
import PrivateRouteAdmin from './PrivateRouteAdmin';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/RegisterUser" component={RegisterUser} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <PrivateRouteAdmin path="/AdminPanel" component={AdminPanel} />
            <PrivateRouteUser path="/UserPanel" component={UserPanel} />
            <PrivateRouteAdmin path="/ResidentsAdmin" component={ResidentsAdmin} />
            <PrivateRouteAdmin path="/VolunteerWorks" component={VolunteerWorks} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <PrivateRouteUser path="/RegisterComplete" component={RegisterComplete} />
            <Route path='*' component={Page404} />           
        </Switch>
    </BrowserRouter>
);

export default Routes;