import React from 'react';
import './styles.css';

import MenuUser from '../../components/Menu/menuUserPanel';

function UserPanel(){
    return(
        <>
            <MenuUser/>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Seja Bem-vindo , deseja ser um voluntario?</h5>
                    <p class="card-text">Veja algumas vagas para que você possa colaborar com a sua comunidade:</p>
                </div>
            </div>

            <div class="container mt-5 mb-5 w-50">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="card shadow-lg">
                            <div class="card-body">
                                <p class="card-text">Imagem: </p>
                                {/* <img src=""> ---------  pessoal do back, arrumar o destino da imagem quando implementarem a lógica */}
                                <h5 class="card-title"></h5>
                                <p class="card-text">Descrição: </p>
                                <p class="card-text">N° de vagas: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanel;