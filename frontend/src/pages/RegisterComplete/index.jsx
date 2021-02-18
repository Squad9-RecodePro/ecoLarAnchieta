import React from 'react';

import Menu from '../../components/Menu/mainMenu';


function RegisterComplete(){
    return(
        <>
            <Menu page1={"UserPanel"} title1={"Painel Usuário"} page2={"/UserLogin"} title2={"Sair"} home={"UserPanel"}> </Menu>
            <div className="container" id="container">
                <h1 class="form-row justify-content-center mt-5">Finalizar Cadastro</h1>
                <form class="mt-5" onsubmit="return validateForm(event)" action="../../backend/servidor/acesso_complemento_cadastro.php" method="post">


                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="email">Email</label>
                        <input name="email" type="email" class="form-control" placeholder="Email" value=""/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="renda">Renda</label>
                        <input name="renda" type="number" class="form-control w-20" placeholder="Digite aqui" value=""/>
                    </div>

                    <div class="form-group col-md-4">
                        <label for="profissao">Profissão:</label>
                        <input name="profissao" type="text" class="form-control" placeholder="Ex. Agricultor" value=""/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="colaborar">Voce pode contribuir para a aquisição da Máquina?</label>
                        <input name="colaborar" type="text" class="form-control" placeholder="Sim ou Não" value=""/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="qtd_moradores">Quantas pessoas mora com você?</label>
                        <input name="qtd_moradores" type="number" class="form-control" placeholder="Digite a quantidade" value=""/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="telefone">Telefone para contato:</label>
                        <input name="telefone" type="text" class="form-control" placeholder="Ex: 11 95200-0000" value=""/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="endereco">Rua:</label>
                        <input name="endereco"type="text" class="form-control" placeholder="Ex: Rua, Av, Viela. . ." value="" required />
                    </div>
                    <div class="form-group col-md-1">
                        <label for="numero">Numero:</label>
                        <input name="numero" type="text" class="form-control" placeholder="Ex: 33" value=""/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="complemento">Complemento:</label>
                        <input name="complemento" type="text" class="form-control" placeholder="Ex: Casa 2" value=""/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="bairro">Bairro:</label>
                        <input name="bairro" type="text" class="form-control" placeholder="Ex: Vila Anchieta" value="" required/>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="cidade">Cidade</label>
                        <input name="cidade" type="text" class="form-control" placeholder="Ex: São Paulo"  value="" required/>
                    </div>

                    <div class="form-group col-md-2">
                        <label for="cep">CEP:</label>
                        <input name="cep" type="number" class="form-control" placeholder="Ex: 08100-000" value="" required/>
                    </div>

                    <div class="form-group col-md-4">
                        <label for="uf">Estado:</label>
                        <select name="uf" id="inputEstado" class="form-control" value="" required>
                            <option selected> SP </option>
                            <option> RJ </option>
                        </select>
                    </div>
                </div>
                <div class="form-row justify-content-center">
                    <button type="submit" class="btn mt-3 btn-primary w-50">Atualizar</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default RegisterComplete;