import React from 'react';
import Menu from '../../components/Menu/mainMenu';

function VolunteerWorks() {
    return (
        <>
            <Menu page1={"ResidentsAdmin"} title1={"Moradores"} page2={"AdminPanel"} title2={"Home Admin"} page3={""} title3={"Sair"} >  </Menu>
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


            {/* Modal Cadastrar */}
            <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastro</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="../../backend/servidor/voluntariado_cadastro.php" method="POST">

                            <input type="text" name="titulo" class="form-control mt-3" placeholder="Título" />
                            <input type="file" name="imagem" class="form-control mt-3" placeholder="Imagem" />
                            <textarea name="descricao" class="form-control mt-3" cols="30" rows="5" placeholder="Descrição"></textarea>
                            <input name="nvagas" type="number" class="form-control mt-3" placeholder="Número de vagas" />

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-info">Salvar mudanças</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                            <form action="../../backend/servidor/alterar_voluntario.php?id='<?php echo $rows['id']; ?>'" method="POST">

                            <input type="text" name="titulo" class="form-control mt-3" placeholder="Título" />
                            <input type="file" name="imagem" class="form-control mt-3" placeholder="Imagem" />
                            <textarea name="descricao" class="form-control mt-3" cols="30" rows="5" placeholder="Descrição"></textarea>
                            <input name="nvagas" type="number" class="form-control mt-3" placeholder="Número de vagas" />

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Alterar</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal Excluir */}
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

export default VolunteerWorks;
