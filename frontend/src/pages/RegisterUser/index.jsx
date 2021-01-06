import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

const RegisterUser = () => {
    return (
        <div>
            <form id="form-cadastro" onsubmit="return validateForm(event)" action="http://localhost:8080/ecocasa/backend/cadastro_usuario.php" method="post">

                <div>
                    <label>Nome</label>
                    <input type="text" id="nome" name="nome" class="form-control mt-4" placeholder="Nome" required />
                </div>

                <div>
                    <label>email</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" id="senha" name="senha" class="form-control mt-3" placeholder="Senha" required />
                </div>

                <div>
                    <label>Confirme a senha: </label>
                    <input type="password" id="conf_senha" name="conf_senha" class="form-control mt-3" placeholder="Confirmar senha" required />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default RegisterUser;