import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';
import Anchieta2 from '../../assets/images/anchieta4.jpeg';

const RegisterUser = () => {
    return (
        <>
            <div className="containerRegister">

                <div className="informationRegister">
                    {/* <h1>Seja Bem Vindo de Volta!</h1> */}
                    {/* <img src={Anchieta2} ></img> */}
                    {/* <p>Se você já é um morador cadastrado,<br /> realize o Login aqui!</p> */}
                    {/* <a href="../UserLogin">Entrar</a> */}
                </div>

                <div className="registerForm">

                    <form>
                        <h2>Cadastre-se</h2>
                        <div className="content">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input className="formInput" type="text" name="nome" placeholder="Nome" required />
                        </div>

                        <div className="content">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input className="formInput" type="text" name="email" placeholder="Email" />
                        </div>

                        <div className="content">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <input className="formInput" type="password" name="senha" placeholder="Senha" required />
                        </div>

                        <div className="content">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <input className="formInput" type="password" name="conf_senha" placeholder="Confirmar senha" required />
                        </div>

                        <button type="submit">Cadastrar</button>
                        <a href="./UserLogin">
                            Já possui uma conta? Clique em mim!
                        </a>
                    </form>
                </div>
            </div>
        </>

    );

}
export default RegisterUser;