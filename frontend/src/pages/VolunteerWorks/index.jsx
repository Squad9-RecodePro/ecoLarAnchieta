import React from 'react';
import MenuVolunteer from '../../components/Menu/menuVolunteerWorks';

function VolunteerWorks(){
    return(
        <>
            <MenuVolunteer/>
            <div class="container" id="container">
                <main class="row m-auto container align-items-center py-5" styles="height: 88vh">
                    <div class="table-responsive card">
                        <div class="bg-dark card-header d-flex align-items-center justify-content-between" styles="height: 70px;">
                            <h4 class="text-white mb-0">Trabalho voluntário</h4>
                            <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#modalExemplo">
                            Cadastrar
                            </button>
                        </div>
                        <table class="table table-hover text-center my-0">
                            <thead>
                            <tr>
                                <th scope="col">Título</th>
                                <th scope="col">Imagem</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Número de vagas</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <th name="<?php echo $rows['id']; ?>" scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>

                                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modalAlterar">Alterar</button>
                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalRemover">Remover</button>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    )
}

export default VolunteerWorks;