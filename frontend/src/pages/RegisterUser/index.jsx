import React from 'react';
import { useHistory } from "react-router-dom";

import '../../assets/styles/global.css';
import './styles.css';

// import Anchieta2 from '../../assets/images/anchieta4.jpeg';

const RegisterUser = () => {

    const [name, setName] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secondpassword, setSecondPassword] = React.useState("");

    const baseUrl = 'http://localhost:5000/auth/'
    let history = useHistory();
    function registerUser(event) {
        event.preventDefault();

        const formData = { "name": name, "email": email, "password": password }
        const url = `${baseUrl}register`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((dados) => {
                if (dados) {
                    alert("Cadastro efetuado!")
                    history.push("/UserLogin");
                }
            })

        setRender(!render);

        event.preventDefault();

        // Lógica de cadastro
        setName("")
        setEmail("");
        setPassword("");
        setSecondPassword("");

    }

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

                    <form onSubmit={registerUser} method="POST">
                        <h2>Cadastre-se</h2>
                        <div className="content">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <input className="formInput" type="text" name="name" placeholder="Nome" required value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </div>

                        <div className="content">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="formInput" type="text" name="email" placeholder="Email" value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="content">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input className="formInput" type="password" name="password" placeholder="Senha" required value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="content">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input className="formInput" type="password" name="conf_senha" placeholder="Confirmar senha" required value={secondpassword}
                                onChange={(event) => setSecondPassword(event.target.value)} />
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