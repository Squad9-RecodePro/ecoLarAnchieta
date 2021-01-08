import React from 'react';

import './styles.css';
import Tijolo from '../../assets/images/tijolo.svg';

const AdminStart = () => {
    return (
        <>
            <div className="containerAdminStart">
                <div className="content" >
                    <a href="#"> </a>
                    <h1>
                        <img src={Tijolo} alt="Logo" title="Logo EcoCasa" /> Ecolar Anchieta
                    </h1>

                    <div className="adminNav">
                        <a href="#">Moradores</a>
                        <a href="#">Trabalhos voluntários</a>
                        <a href="#">Sair</a>
                    </div>
                </div>
                <div className="informations">
                    <div className="totalFamily">
                        <h3>Total de Familias na Ocupação</h3>
                        <h2>1100</h2>
                    </div>

                    <div className="totalHouses">
                        <h3>Quantidade de casas</h3>
                        <h2>8</h2>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AdminStart;