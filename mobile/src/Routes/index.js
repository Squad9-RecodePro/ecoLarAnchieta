import React from 'react'
import { 
    createAppContainer, 
    createSwitchNavigator 
} from 'react-navigation'

import Home from '../screens/Home'
import PainelUser from '../screens/PainelUser'
import Login from '../screens/Login'
import Register from '../screens/Register'


const Rotas = {
    Home: {
        nome: "Home",
        screen: Home
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Register: {
        nome: "Register",
        screen: Register
    },
    PainelUser: {
        nome: "PainelUser",
        screen: PainelUser
    },
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
