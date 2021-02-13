import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");
    const baseUrl = 'http://localhost:5000/auth/'

    let history = useHistory();

    const resetPassword = (event) => {
        event.preventDefault();

        const formData = { "email": email }
        const url = `${baseUrl}forgot_password`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"

            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then((dados) => {
                if (dados.token) {
                    history.push("/ResetPassword");
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
                    <form onSubmit={resetPassword}>
                        <h2>Recuperar senha</h2>

                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" required />
                        </div>
                        <button type="submit" value="Enviar" className="btn container" >Recuperar</button>
                    </form>
                </div>
            </div>

        </>

    );
}

export default ForgotPassword;