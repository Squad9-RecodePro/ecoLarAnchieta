import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

const ResetPassword = () => {
    const [email, setEmail] = React.useState("");
    const [token, setToken] = React.useState("");
    const [password, setPassword] = React.useState("");
    const baseUrl = 'http://localhost:5000/auth/'

    let history = useHistory();

    const newPassword = async (event) => {
        event.preventDefault();

        const formData = { "email": email, "token": token, "password": password }
        const url = `${baseUrl}reset_password`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true

            },
            body: JSON.stringify(formData)
        })
        let responseStatus = response.status;
        if (responseStatus === 200) {
            history.push('UserLogin')
        } else {
            console.log(response)
            alert('Informações inválidas tente novamente');
        }

        event.preventDefault();
    }



    return (
        <>
            <div className="sectionPassword">
                <div className="content">
                    <form onSubmit={newPassword}>
                        <h2>Nova senha</h2>

                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="password" value={token} onChange={event => setToken(event.target.value)} placeholder="Token" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Nova Senha" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="password" name="password" placeholder="Confirmar Senha" required />
                        </div>
                        <button type="submit" value="Enviar" className="btn container" >Entrar</button>
                    </form>
                </div>
            </div>

        </>

    );
}

export default ResetPassword;