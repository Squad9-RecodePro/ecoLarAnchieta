import React from 'react';
import { useHistory } from "react-router-dom";

import './styles.css';

import Anchieta from '../../assets/images/anchieta3.jpeg';

const AdminLogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const baseUrl = 'http://localhost:5000/auth/';
    let history = useHistory();
    const loginAdmin = (event) => {

        event.preventDefault();

        const formData = {
            "email": email,
            "password": password
        }
        const url = `${baseUrl}admin`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then((dados) => {
                if (dados.token) {
                    localStorage.setItem('admin-token', dados.token)
                    history.push("/AdminPanel");
                } else {
                    alert('Email ou senha invalido!');
                }
            })

        setEmail("");
        setPassword("");
        event.preventDefault();

    }

    return (
        <>
            <div className="containerAdminLogin">
                <div className="content">
                    <div className="header">
                        <p>
                            <span>Acesso exclusivo dos administradores</span>
                            <span className="ecoLar"> </span>
                        </p>
                    </div>

                    <form onSubmit={loginAdmin}>
                        <h2>Administrador</h2>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" />
                        </div>
                        <div className="container">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input className="input" type="password" name="senha" value={password} onChange={event => setPassword(event.target.value)} placeholder="Senha" />
                        </div>
                        <button type="submit" value="Enviar" className="btn container">Entrar</button>
                    </form>
                </div>

                <div className="container-1">

                    <img src={Anchieta} alt=""/>

                </div>
            </div>

        </>
    );
}

export default AdminLogin;
