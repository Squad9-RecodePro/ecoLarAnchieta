import React from 'react';

import './styles.css';

import Tijolo from '../../assets/images/tijolo.svg';
import Footer from '../../components/Footer';


const AdminLogin = () => {
    return (
        <>
            <div className="containerAdminLogin">
                <div className="content">
                    <div className="header">
                        <h1><img src={Tijolo} alt="testeImg" /> Ecolar Anchieta</h1>
                        <p>
                            <span>Bem Vindx ao</span>
                            <span className="ecoLar"> EcoLar Anchieta</span>
                        </p>
                    </div>

                    <form>
                        <h2>Administrador</h2>
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
                        <h3>Sobre EcoLar Anchieta</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum iste nulla atque 
                        <br /> blanditiis vel esse nihil similique earum! Similique necessitatibus ad illo dignissimos
                        <br /> iste vero adipisci non nihil in!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default AdminLogin;