import React from 'react';
import Menu from '../../components/Menu/mainMenu';

function ResidentsAdmin() {

    const [complemento, setComplemento] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
    const [id, setId] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [renda, setRenda] = React.useState('');
    const [profissao, setProfissao] = React.useState('');
    const [colaborar, setColaborar] = React.useState('');
    const [moradores, setMoradores] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
    const [num, setNum] = React.useState('');
    const [compl, setCompl] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [uf, setUf] = React.useState('');

    const baseUrl = 'http://localhost:5000/usercompl/';

    React.useEffect(() => {
        async function fetchData() {
            const url = baseUrl;
            const response = await fetch(url);
            setComplemento(await response.json());
        }
        fetchData();
    }, [render]);

    function excluir(event) {
        event.preventDefault()

        fetch(baseUrl + complemento[id]._id, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(() => {
                    setMsg(false)
                }, 5000)
            })

        setNome('');
        setEmail('');
        setRenda('');
        setProfissao('');
        setColaborar('');
        setMoradores('');
        setTel('');
        setEndereco('');
        setNum('');
        setCompl('');
        setBairro('');
        setCidade('');
        setCep('');
        setUf('');

    }

    function atualizar(event) {
        event.preventDefault()

        let form = {
            nome: nome,
            email: email,
            renda: renda,
            profissao: profissao,
            colaborar: colaborar,
            moradores: moradores,
            tel: tel,
            endereco: endereco,
            num: num,
            compl: compl,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
        }

        fetch(baseUrl + complemento[id]._id, {
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
        console.log(form)

        setNome('');
        setEmail('');
        setRenda('');
        setProfissao('');
        setColaborar('');
        setMoradores('');
        setTel('');
        setEndereco('');
        setNum('');
        setCompl('');
        setBairro('');
        setCidade('');
        setCep('');
        setUf('');

    }

    return (
        <>
            <Menu page1={"VolunteerWorks"} title1={"Trabalhos Voluntários"} page2={"/AdminLogin"} title2={"Sair"} home={"AdminPanel"}></Menu>
            <div className="container-fluid" id="container">
                <main className="col-12 m-auto align-items-center">
                    <div className="table-responsive card">
                        <div className="card-header bg-dark d-flex align-items-center justify-content-between">
                            <h4 className="text-white">Moradores</h4>
                        </div>
                        <table className="table table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Renda</th>
                                    <th scope="col">Profissão</th>
                                    <th scope="col">Colaborar</th>
                                    <th scope="col">Moradores</th>
                                    <th scope="col">Tel</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Nº</th>
                                    <th scope="col">Compl</th>
                                    <th scope="col">Bairro</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">CEP</th>
                                    <th scope="col">UF</th>
                                </tr>
                            </thead>
                            {complemento.map((element, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{element.nome}</td>
                                            <td>{element.email}</td>
                                            <td>{element.renda}</td>
                                            <td>{element.profissao}</td>
                                            <td>{element.colaborar}</td>
                                            <td>{element.moradores}</td>
                                            <td>{element.tel}</td>
                                            <td>{element.endereco}</td>
                                            <td>{element.num}</td>
                                            <td>{element.compl}</td>
                                            <td>{element.bairro}</td>
                                            <td>{element.cidade}</td>
                                            <td>{element.cep}</td>
                                            <td>{element.uf}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalRemover" onClick={event => setId(event.target.value)} value={index} >Remover</button>
                                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modalAlterar" onClick={event => setId(event.target.value)} value={index} >Alterar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </main>
            </div>

            {/* Modal Alterar */}
            <div className="modal fade" id="modalAlterar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Altere os dados</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={atualizar}>

                                <input type="text" name="nome" value={nome} onChange={event => setNome(event.target.value)} className="form-control mt-3" placeholder="Nome" />
                                <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control mt-3" placeholder="E-mail" />
                                <input type="text" name="renda" value={renda} onChange={event => setRenda(event.target.value)} className="form-control mt-3" placeholder="Renda" />
                                <input type="text" name="profissao" value={profissao} onChange={event => setProfissao(event.target.value)} className="form-control mt-3" placeholder="Profissão" />
                                <input type="text" name="colaborar" value={colaborar} onChange={event => setColaborar(event.target.value)} className="form-control mt-3" placeholder="Colaborar" />
                                <input type="number" name="moradores" value={moradores} onChange={event => setMoradores(event.target.value)} className="form-control mt-3" placeholder="Moradores" />
                                <input type="text" name="telefone" value={tel} onChange={event => setTel(event.target.value)} className="form-control mt-3" placeholder="Telefone" />
                                <input type="text" name="endereço" value={endereco} onChange={event => setEndereco(event.target.value)} className="form-control mt-3" placeholder="Endereço" />
                                <input type="text" name="numero" value={num} onChange={event => setNum(event.target.value)} className="form-control mt-3" placeholder="Nº" />
                                <input type="text" name="complemento" value={compl} onChange={event => setCompl(event.target.value)} className="form-control mt-3" placeholder="Complemento" />
                                <input type="text" name="bairro" value={bairro} onChange={event => setBairro(event.target.value)} className="form-control mt-3" placeholder="Bairro" />
                                <input type="text" name="cidade" value={cidade} onChange={event => setCidade(event.target.value)} className="form-control mt-3" placeholder="Cidade" />
                                <input type="number" name="cep" value={cep} onChange={event => setCep(event.target.value)} className="form-control mt-3" placeholder="CEP" />
                                <input type="text" name="uf" value={uf} onChange={event => setUf(event.target.value)} className="form-control mt-3" placeholder="UF" />

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Alterar</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                </div>
                            </form>
                            {msg &&
                                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                                    Alterações feitas com sucesso!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Remover */}
            <div className="modal fade" id="modalRemover" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={excluir}>
                                <h4>Tem certeza que deseja remover?</h4>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-danger" value={id} onChange={event => setId(event.target.value)}>Sim</button>
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Cancelar</button>
                                </div>
                            </form>
                            {msg &&
                                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                                    Morador excluido com sucesso!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResidentsAdmin;