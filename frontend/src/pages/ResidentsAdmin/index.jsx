import React from 'react';
import MenuResidents from '../../components/Menu/menuResidents';

function ResidentsAdmin(){
    return(
        <>
            <MenuResidents/>
            <main class="row m-auto align-items-center py-5" styles="height: 88vh">
                <div class="col-12">
                    <div class="card-header bg-dark d-flex align-items-center justify-content-between" styles="height: 70px;">
                        <h4 class="text-white mb-0">Moradores</h4>
                    </div>
                    <table class="table table-hover text-center my-0">
                        <thead>
                            <tr>
                                <th scope="col-3">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Renda</th>
                                <th scope="col">Profissão</th>
                                <th scope="col">Colaborar</th>
                                <th scope="col">Moradores</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Nº</th>
                                <th scope="col">Complemento</th>
                                <th scope="col">Bairro</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">CEP</th>
                                <th scope="col">UF</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th name="" scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                <td>
                                    <a class="btn btn-danger" href="../../backend/servidor/deletemoradores.php?id='<?php echo $rows['id_moradores']; ?>' ">Remover</a>
                                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modalAlterar">Alterar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

        </>
    )
}

export default ResidentsAdmin;