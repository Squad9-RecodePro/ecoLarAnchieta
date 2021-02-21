import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");
    const baseUrl = 'http://localhost:5000/auth/'

    let history = useHistory();

    const resetPassword = async(event) => {
        event.preventDefault();

        const formData = { "email": email }
        const url = `${baseUrl}forgot_password`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"

            },
            body: JSON.stringify(formData)
        })
        let responseStatus = response.status;
        if(responseStatus === 200){
           history.push('ResetPassword')
        }else{
            alert('Email invalido!');
        }

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
                        <p>Insira seu e-mail cadastrado para recuperar a senha</p>
                        <button type="submit" value="Enviar" className="btn container" >Recuperar</button>
                        
                    </form>
                    <a href="./UserLogin"> Voltar para página de login </a>
                </div>
            </div>

        </>

    );
}

export default ForgotPassword;