import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import RegisterUser from './pages/RegisterUser';
import AdminStart from './pages/AdminStart';
import MainPage from './pages/MainPage';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import ResidentsAdmin from './pages/ResidentsAdmin';
import VolunteerWorks from './pages/VolunteerWorks';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import RegisterComplete from './pages/RegisterComplete';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/RegisterUser" component={RegisterUser} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <Route path="/AdminStart" component={AdminStart} />
            <Route path="/AdminPanel" component={AdminPanel} />
            <Route path="/UserPanel" component={UserPanel} />
            <Route path="/ResidentsAdmin" component={ResidentsAdmin} />
            <Route path="/VolunteerWorks" component={VolunteerWorks} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/RegisterComplete" component={RegisterComplete} />            
        </Switch>
    </BrowserRouter>
);

export default Routes;