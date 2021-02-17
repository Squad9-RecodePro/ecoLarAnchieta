import React from 'react';
import Menu from '../../components/Menu/mainMenu';

function ResidentsAdmin(){
    return(
        <>
            <Menu page1={"VolunteerWorks"} title1={"Trabalhos Voluntários"} page2={""} title2={"Sair"} home={"AdminPanel"}></Menu>
            <div className="container-fluid row" id="container">
                <main class="col-12 m-auto align-items-center py-5" styles="height: 88vh">
                    <div class="col-12">
                        <div class="card-header bg-dark d-flex align-items-center justify-content-between" styles="height: 70px; weight: 100px;">
                            <h4 class="text-white mb-0">Moradores</h4>
                        </div>
                        <table class="table table-hover text-center my-0">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
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
                                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalRemover">Remover</button>
                                        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modalAlterar">Alterar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            {/* Modal Alterar */}
            <div class="modal fade" id="modalAlterar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Altere os dados</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="../../backend/servidor/alterar_moradores.php?id='<?php echo $rows['id']; ?>'" method="POST">

                                <input type="text" name="nome" class="form-control mt-3" placeholder="Nome" />
                                <input type="text" name="email" class="form-control mt-3" placeholder="E-mail" />
                                <input type="text" name="renda" class="form-control mt-3" placeholder="Renda" />
                                <input type="text" name="profissao" class="form-control mt-3" placeholder="Profissão" />
                                <input type="text" name="colaborar" class="form-control mt-3" placeholder="Colaborar" />
                                <input type="text" name="moradores" class="form-control mt-3" placeholder="Moradores" />
                                <input type="text" name="telefone" class="form-control mt-3" placeholder="Telefone" />
                                <input type="text" name="endereço" class="form-control mt-3" placeholder="Endereço" />
                                <input type="text" name="numero" class="form-control mt-3" placeholder="Nº" />
                                <input type="text" name="complemento" class="form-control mt-3" placeholder="Complemento" />
                                <input type="text" name="bairro" class="form-control mt-3" placeholder="Bairro" />
                                <input type="text" name="cidade" class="form-control mt-3" placeholder="Cidade" />
                                <input type="text" name="cep" class="form-control mt-3" placeholder="CEP" />
                                <input type="text" name="uf" class="form-control mt-3" placeholder="UF" />

                                
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Alterar</button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Remover */}
            <div class="modal fade" id="modalRemover" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <h4>Tem certeza que deseja remover?</h4>

                                <div class="modal-footer">
                                <a class="btn btn-danger" href="../../backend/servidor/delete.php?id='<?php echo $rows['id']; ?>' ">Sim</a>
                                <button type="button" class="btn btn-light" data-dismiss="modal">cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResidentsAdmin;