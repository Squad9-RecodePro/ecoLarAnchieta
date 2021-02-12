import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

const ResetPassword = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const baseUrl = 'http://localhost:5000/auth/'

    let history = useHistory();

    const newPassword = (event) => {
        event.preventDefault();

        const formData = { "email": email, "password": password }
        const url = `${baseUrl}forgot_password`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true

            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then((dados) => {
                if (dados.email) {
                    history.push("/");
                } else {
                    console.log('Não funcionou');
                }
            })

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
                            <input className="input" type="text" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Senha" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="password" placeholder="Confirmar Senha" required />
                        </div>
                        <button type="submit" value="Enviar" className="btn container" >Entrar</button>
                    </form>
                </div>
            </div>

        </>

    );
}

export default ResetPassword;