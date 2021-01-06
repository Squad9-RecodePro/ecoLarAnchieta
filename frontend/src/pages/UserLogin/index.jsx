import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

const UserLogin = () => {
    return (
        <div className="container-0">
            <div className="content">
                <h1 className="h1">
                    <span>Bem Vindx ao</span>
                    <br />
                    <span className="ecoLar"> EcoLar Anchieta</span>
                </h1>

                <form action="http://localhost:8080/ecocasa/backend/login_usuario.php" method="post">
                    <div className="container">
                        <label className="label">Email:</label>
                        <input className="input" type="text" name="email" placeholder="Email" />

                    </div>
                    <div className="container">
                        <label className="label">Senha:</label>
                        <input className="input" type="password" name="password" placeholder="Senha" />
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
                </div>

                <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/06/Como-Criar-Ambiente-de-Teste-no-WordPress-Um-Guia-para-Iniciantes.png" alt="testeImg" />

            </div>
        </div>
    );

}

export default UserLogin;