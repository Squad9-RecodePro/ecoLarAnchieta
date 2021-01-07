import React from 'react';

import '../../assets/styles/global.css';
import './style.css';

import Footer from '../../components/Footer';

const RegisterUser = () => {
    return (
        <>
            <div className="containerRegister">

                <div className="informationRegister">
                    <h1>Bem Vindo de Volta!</h1>
                    <p>Se você já é um morador cadastrado,<br /> realize o Login aqui!</p>
                    <button>Entrar</button>
                </div>

                <div className="registerForm">
                    
                    <form>
                        <h2>Cadastre-se</h2>
                        <div className="content">
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            <input className="formInput" type="text" name="nome" placeholder="Nome" required />
                        </div>

                        <div className="content">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
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
                    </form>
                </div>
            </div>
            <Footer />
        </>

    );

}
export default RegisterUser;