import React from 'react';
import './styles.css';

import MenuUser from '../../components/Menu/menuUserPanel';

function UserPanel() {

    return (
        <>
            <MenuUser />
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Seja Bem-vindo , deseja ser um voluntario?</h5>
                    <p className="card-text">Veja algumas vagas para que você possa colaborar com a sua comunidade:</p>
                </div>
            </div>

            <div className="container mt-5 mb-5 w-50">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <p className="card-text">Titulo: </p>
                                {/* <img src=""> ---------  pessoal do back, arrumar o destino da imagem quando implementarem a lógica */}
                                <h5 className="card-title"></h5>
                                <p className="card-text">Descrição: </p>
                                <p className="card-text">N° de vagas: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanel;