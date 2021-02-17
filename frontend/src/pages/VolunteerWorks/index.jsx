import React from 'react';
import Menu from '../../components/Menu/mainMenu';

function VolunteerWorks() {
    const [voluntariado, setVoluntariado] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [titulo, setTitulo] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [nvagas, setNvagas] = React.useState('');
    const [id, setId] = React.useState('');
    const [msg, setMsg] = React.useState(false);

    const baseUrl = 'http://localhost:5000/voluntariado/';


    React.useEffect(() => {
        async function fetchData() {
            const url = baseUrl;
            const response = await fetch(url);
            setVoluntariado(await response.json())
        }
        fetchData();
    }, [render])

    function cadastrarVaga(event) {
        event.preventDefault()
        let form = {
            title: titulo,
            description: descricao,
            nvagas: nvagas,
        }

        fetch(baseUrl, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(() => {
                    setMsg(false)
                }, 5000)
            })

        setTitulo('');
        setDescricao('');
        setNvagas('');
    }

    function excluir(event) {
        event.preventDefault()

        fetch(baseUrl + voluntariado[id]._id, {
            method: "delete",
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(() => {
                    setMsg(false)
                }, 5000)
            })

        setTitulo('');
        setDescricao('');
        setNvagas('');
    }

    function atualizar(event) {
        event.preventDefault()
        let form = {
            title: titulo,
            description: descricao,
            nvagas: nvagas,
        }

        fetch(baseUrl + voluntariado[id]._id, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(() => {
                    setMsg(false)
                }, 5000)
            })

        setTitulo('');
        setDescricao('');
        setNvagas('');
    }

    return (
        <>
            <Menu page1={"ResidentsAdmin"} title1={"Moradores"} page2={""} title2={"Sair"} home={"AdminPanel"}>  </Menu>
            <div className="container" id="container">
                <main className="row m-auto container align-items-center py-5" styles="height: 88vh">
                    <div className="table-responsive card">
                        <div className="bg-dark card-header d-flex align-items-center justify-content-between" styles="height: 70px;">
                            <h4 className="text-white mb-0">Trabalho voluntário</h4>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#modalExemplo">
                                Cadastrar
                            </button>
                        </div>
                        <table className="table table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Título</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Número de vagas</th>
                                </tr>
                            </thead>
                            {voluntariado.map((element, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{element.title}</td>
                                            <td>{element.description}</td>
                                            <td>{element.nvagas}</td>
                                            <td>
                                                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalAlterar" onClick={event => setId(event.target.value)} value={index}>Alterar</button>
                                                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalRemover" onClick={event => setId(event.target.value)} value={index} >Remover</button>
                                            </td>
                                        </tr>
                                    </tbody>

                                )
                            })}
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
                            <form onSubmit={cadastrarVaga}>

                                <input type="text" name="titulo" class="form-control mt-3" placeholder="Título" value={titulo} onChange={event => setTitulo(event.target.value)} />

                                <textarea name="descricao" class="form-control mt-3" cols="30" rows="5" placeholder="Descrição" value={descricao} onChange={event => setDescricao(event.target.value)}></textarea>

                                <input name="nvagas" type="number" class="form-control mt-3" placeholder="Número de vagas" value={nvagas} onChange={event => setNvagas(event.target.value)} />

                                <div class="modal-footer">
                                    <button type="submit" name="Enviar" class="btn btn-info">Salvar Mudanças</button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                                </div>
                            </form>
                            {msg &&
                                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                                    Cadastro de vaga efetuado com sucesso!
                                </div>
                            }
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
                            <form onSubmit={atualizar}>

                                <input type="text" name="titulo" value={titulo} onChange={event => setTitulo(event.target.value)} class="form-control mt-3" placeholder="Título" />

                                <textarea name="descricao" value={descricao} onChange={event => setDescricao(event.target.value)} class="form-control mt-3" cols="30" rows="5" placeholder="Descrição"></textarea>

                                <input name="nvagas" type="number" value={nvagas} onChange={event => setNvagas(event.target.value)} class="form-control mt-3" placeholder="Número de vagas" />

                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Alterar</button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                                </div>
                            </form>
                            {msg &&
                                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                                    Alteração feita com sucesso!
                                </div>
                            }
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

                            <form onSubmit={excluir}>
                                <h4>Tem certeza que deseja remover?</h4>

                                <div class="modal-footer">
                                    <button type="submit" value={id} onChange={event => setId(event.target.value)} class="btn btn-danger" >Sim</button>
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                                </div>
                            </form>
                            {msg &&
                                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                                    Vaga excluida com sucesso!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VolunteerWorks;
