import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRouteUser = props => {
    const isLogged = !!localStorage.getItem('user-token')
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


export default PrivateRouteUser;