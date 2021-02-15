import React from 'react';
import Menu from '../../components/Menu/mainMenu';

function VolunteerWorks() {
    return (
        <>
            <Menu page1={"ResidentsAdmin"} title1={"Moradores"} page2={""} title2={"Sair"}> </Menu>
            <div className="container" id="container">
                <main className="row m-auto container align-items-center py-5" styles="height: 88vh">
                    <div className="table-responsive card">
                        <div className="bg-dark card-header d-flex align-items-center justify-content-between" styles="height: 70px;">
                            <h4 className="text-white mb-0">Trabalho voluntário</h4>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#modalExemplo">
                                Cadastrar
                            </button>
                        </div>
                        <table className="table table-hover text-center my-0">
                            <thead>
                                <tr>
                                    <th scope="col">Título</th>
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
                                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalAlterar">Alterar</button>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalRemover">Remover</button>
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
