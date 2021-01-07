import React from 'react';

import '../../assets/styles/global.css';
import './style.css';

const RegisterUser = () => {
    return (
        <div className="containerRegister">

<<<<<<< HEAD
                <div>
                    <label>Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome" required />
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" id="senha" name="senha" class="form-control mt-3" placeholder="Senha" required />
                </div>

                <div>
                    <label>Confirme a senha: </label>
                    <input type="password" id="conf_senha" name="conf_senha" placeholder="Confirmar senha" required />
                </div>

                <button type="submit">Enviar</button>
            </form>
=======
            <div className="content-1">
                <div className="aboutUs">
                    <h3>Sobre EcoLar Anchieta</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum iste nulla atque <br /> blanditiis vel esse nihil similique earum! Similique necessitatibus ad illo dignissimos <br /> iste vero adipisci non nihil in!</p>
                </div>

            </div>
            <div className="content-2">
                <form action="http://localhost:8080/ecocasa/backend/cadastro_usuario.php" method="post">

                    <div>
                        <label>Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome" required />
                    </div>

                    <div>
                        <label>email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>

                    <div>
                        <label>Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Senha" required />
                    </div>

                    <div>
                        <label>Confirme a senha: </label>
                        <input type="password" name="conf_senha" placeholder="Confirmar senha" required />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
>>>>>>> c63019f038644c66894fb89f29baf36e5083ee91
        </div>
    );

}

export default RegisterUser;