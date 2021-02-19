import React from 'react';

import Menu from '../../components/Menu/mainMenu';


function RegisterComplete() {

    const [complemento, setComplemento] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
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

    function finalizarCadastro(event) {
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

        fetch(baseUrl, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(() => {
                    setMsg(false);
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

    return (
        <>
            <Menu page1={"UserPanel"} title1={"Painel Usuário"} page2={"/UserLogin"} title2={"Sair"} home={"UserPanel"}> </Menu>
            <div className="container" id="container">
                <h1 className="form-row justify-content-center mt-5">Finalizar Cadastro</h1>

                <form className="mt-5" onSubmit={finalizarCadastro}>

                    <div className="form-row justify-content-center">
                        <div className="form-group col-md-8">
                            <label for="nome" >Nome completo</label>
                            <input name="nome" type="text" className="form-control" placeholder="Nome completo" value={nome} onChange={event => setNome(event.target.value)} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="email" >Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="renda">Renda</label>
                            <input name="renda" type="text" className="form-control w-20" placeholder="Digite aqui" value={renda} onChange={event => setRenda(event.target.value)} />
                        </div>

                        <div className="form-group col-md-4">
                            <label for="profissao">Profissão:</label>
                            <input name="profissao" type="text" className="form-control" placeholder="Ex. Agricultor" value={profissao} onChange={event => setProfissao(event.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="colaborar">Voce pode contribuir para a aquisição da Máquina?</label>
                            <input name="colaborar" type="text" className="form-control" placeholder="Sim ou Não" value={colaborar} onChange={event => setColaborar(event.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="qtd_moradores">Quantas pessoas mora com você?</label>
                            <input name="qtd_moradores" type="number" className="form-control" placeholder="Digite a quantidade" value={moradores} onChange={event => setMoradores(event.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="telefone">Tel para contato:</label>
                            <input name="telefone" type="text" className="form-control" placeholder="Ex: 11 95200-0000" value={tel} onChange={event => setTel(event.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="endereco">Rua:</label>
                            <input name="endereco" type="text" className="form-control" placeholder="Ex: Rua, Av, Viela. . ." value={endereco} onChange={event => setEndereco(event.target.value)} required />
                        </div>
                        <div className="form-group col-md-1">
                            <label for="numero">Numero:</label>
                            <input name="numero" type="text" className="form-control" placeholder="Ex: 33" value={num} onChange={event => setNum(event.target.value)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="complemento">Complemento:</label>
                            <input name="complemento" type="text" className="form-control" placeholder="Ex: Casa 2" value={compl} onChange={event => setCompl(event.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="bairro">Bairro:</label>
                            <input name="bairro" type="text" className="form-control" placeholder="Ex: Vila Anchieta" value={bairro} onChange={event => setBairro(event.target.value)} required />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="cidade">Cidade</label>
                            <input name="cidade" type="text" className="form-control" placeholder="Ex: São Paulo" value={cidade} onChange={event => setCidade(event.target.value)} required />
                        </div>

                        <div className="form-group col-md-2">
                            <label for="cep">CEP:</label>
                            <input name="cep" type="number" className="form-control" placeholder="Ex: 08100-000" value={cep} onChange={event => setCep(event.target.value)} required />
                        </div>

                        <div className="form-group col-md-4">
                            <label for="cep">UF:</label>
                            <input name="uf" type="text" className="form-control" placeholder="Ex: SP" value={uf} onChange={event => setUf(event.target.value)} required />
                        </div>

                    </div>
                    <div className="form-row justify-content-center">
                        <button type="submit" className="btn mt-3 btn-primary w-50">Atualizar</button>
                    </div>
                </form>
                {msg &&
                    <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                        Cadastro Finalizado com Sucesso!
                    </div>
                }
            </div>
        </>
    )
}

export default RegisterComplete;
