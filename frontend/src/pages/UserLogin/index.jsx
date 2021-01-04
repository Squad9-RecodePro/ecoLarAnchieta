import React from 'react';

const UserLogin = () => {
    return (
        <div>
            <form >
                <div>
                    <label>login usuario</label>
                    <input type="text" name="email" placeholder="Email"/>

                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" placeholder="Senha"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default UserLogin;