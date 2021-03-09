import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
// import UserPanel from './pages/UserPanel';
// import UserLogin from './pages/UserLogin';


const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem(dados.token)
    return isLogged ? <Route {...props} /> : <Redirect to="/UserLogin" />
}

    // { component: Component, ...rest }
//     <Route
//         {...rest}
//         render={props => 
//         localStorage.getItem("app-token") ? (
//             <Component {...props} />
//         ) : (
//             <Redirect
//                 to={{
//                     pathname: "/UserLogin",
//                     state: { from: props.location }
//                 }}
//             />
//         )
//     }
//     />
// );


    // const {login} = React.useContext(UserLogin);

    // if(login === true) return <Route {...props} />
    // else if(login === false) return <Redirect to="/UserLogin" />
    // else return null;


export default PrivateRoute;