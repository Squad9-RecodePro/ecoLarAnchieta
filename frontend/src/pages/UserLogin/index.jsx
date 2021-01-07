import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

import Tijolo from '../../assets/images/tijolo.svg';
import Houses from '../../assets/images/Building-rafiki.svg';

const UserLogin = () => {
    return (
        <div className="mainUserLogin">
            <div className="containerUserLogin">
                <div className="content">
                    <div className="header">
                        <h1><img src={Tijolo} alt="testeImg" /> Ecolar Anchieta</h1>
                        <p>
                            <span>Bem Vindx ao</span>
                            <span className="ecoLar"> EcoLar Anchieta</span>
                        </p>
                    </div>

                    <form action="http://localhost:8080/ecocasa/backend/login_usuario.php" method="post">
                        <div className="container">
                            <label className="label">Email:</label>
                            <input className="input" type="text" name="email" placeholder="Email" />

                        </div>
                        <div className="container">
                            <label className="label">Senha:</label>
                            <input className="input" type="password" name="senha" placeholder="Senha" />
                        </div>
                        <button type="submit" className="btn container">Enviar</button>
                        <a href="../RegisterUser">
                            Ainda não possui uma conta? Clique em mim!
                    </a>
                    </form>
                </div>

                <div className="container-1">
                    <div className="aboutUs">
                        <h3>Sobre EcoLar Anchieta</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum iste nulla atque <br /> blanditiis vel esse nihil similique earum! Similique necessitatibus ad illo dignissimos <br /> iste vero adipisci non nihil in!</p>
                        <img src={Houses}></img>
                    </div>
                </div>

            </div>
            
        </div>
    );

}

export default UserLogin;