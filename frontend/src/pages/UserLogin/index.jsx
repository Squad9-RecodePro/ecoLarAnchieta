import React, { useState } from 'react';

import './styles.css';

//import Tijolo from '../../assets/images/tijolo.svg';

import Anchieta1 from '../../assets/images/anchieta2.jpg';

const UserLogin = () => {
    const [user, setUser] = React.useState([]);
    const [password, setPassword] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost:5000/auth/authenticate";
            const response = await fetch(url);
            setUser(await response.json())
        }
        fetchData();
    });    

    const userLogin = (event) => {
        event.preventDefault();
        let form = {
            user: user,
            password: password,
        }
        console.log(form)

        const url = "http://localhost:5000/auth/authenticate";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then((response) => response.json());
    }

    return (
        <>
            <div className="containerUserLogin">
                <div className="content">
                    <div className="header">
                        <p>
                            <span>Bem Vindo(a) ao</span>
                            <span className="ecoLar"> EcoLar Anchieta</span>
                        </p>
                    </div>

                    <form action="../UserPanel" onSubmit={userLogin}>
                        <h2>Login</h2>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" value={user} onChange={event => setUser(event.target.value)} placeholder="Email" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input className="input" type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Senha" required />
                        </div>
                        <button type="submit" value="Enviar" className="btn container">Entrar</button>
                        <a href="./RegisterUser">
                            Ainda não possui uma conta? Clique em mim!
                        </a>
                    </form>
                </div>

                <div className="container-1">
                    {/* <div className="aboutUs"> */}
                    <img src={Anchieta1} ></img>
                    {/* </div> */}
                </div>
            </div>
        </>
    );

}

export default UserLogin;