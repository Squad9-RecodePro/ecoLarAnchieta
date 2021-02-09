import React from 'react';

import './styles.css';


import Footer from '../../components/Footer';

import Anchieta from '../../assets/images/anchieta3.jpeg';


const AdminLogin = () => {
    return (
        <>
            <div className="containerAdminLogin">
                <div className="content">
                    <div className="header">
                        <h1> Ecolar Anchieta</h1>
                        <p>
                            <span>Bem Vindo(a) ao</span>
                            <span className="ecoLar"> EcoLar Anchieta</span>
                        </p>
                    </div>

                    <form>
                        <h2 >Administrador</h2>
                        <div className="container">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="container">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <input className="input" type="password" name="senha" placeholder="Senha" />
                        </div>
                        <button type="submit" className="btn container">Entrar</button>
                    </form>
                </div>

                <div className="container-1">
                    <div className="aboutUs">

                        <img src={Anchieta} ></img>

                    </div>
                </div>
            </div>

        </>
    );

}

export default AdminLogin;