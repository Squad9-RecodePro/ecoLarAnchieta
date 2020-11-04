function validateForm(){
    const formulario = document.getElementById('form-cadastro');
    
    const nome = formulario.nome;
    const salario = formulario.salario;
    const profissao = formulario.profissao;
    const checkColaboracao = formulario.checkColaboracao.checked;
    const qtdmoradores = radioValue("qtd-pessoas");
    const telefone = formulario.telefone;
    const endereco = formulario.endereco;
    const numeroRua= formulario['numero-rua'];
    //const complemento = formulario.complemento;
    const bairro = formulario.bairro;
    const cidade = formulario.cidade;
    const cep = formulario.cep;
    const email = formulario.email;
    const senha = formulario.senha;
    const confSenha = formulario['conf-senha'];

    const elementosObrigatorios = [
        nome,
        salario,
        profissao,
        telefone,
        endereco,
        numeroRua,
        bairro,
        cidade,
        cep,
        email,
        senha,
        confSenha
    ];

    if (!typeof checkColaboracao == "undefined"){
        alert("Escolha uma opção de colaboração!");
        return false;
    }

    if (!qtdmoradores){
        alert("Escolha a quantidade de moradores!");
        return false;
    }

    elementosObrigatorios.forEach(element => {
        //console.log(element);
        if (!validar(element,validaPreenchimento)){
            return false;
        }
    });

    // Validando Nome
    if (!validar(nome,validaNome)){
        return false;
    }

    // Validando email
    if (!validar(email,validateEmail)){
        return false;
    }

    // Validando Telefone
    let telNumeros = onlyNumbers(telefone.value);
    let validacaoTel = validaNumCaracteres(telNumeros,11);
    let validacaoTel2 = validaNumCaracteres(telNumeros,13);
    if (!validacaoTel.retorno && !validacaoTel2.retorno){
        alert(validacaoTel.erro);
        telefone.focus();
        return false;
    }

    // Validando Cep
    let cepNumeros = onlyNumbers(cep.value);
    let validacaoCep = validaNumCaracteres(cepNumeros,8);
    if (!validacaoCep.retorno){
        alert(validacaoCep.erro);
        cep.focus();
        return false;
    }

    // Validando senha
    if (senha.value != confSenha.value){
        alert("As senhas devem ser iguais!");
        senha.focus();
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const ret = re.test(email);
    if (ret){
        return {
            "retorno": true
        }
    }else{
        return {
            "retorno": false,
            "error": "E-mail invalido!"
        }
    }
}
  

function validar(elemento,funcao){
    const validacao = funcao(elemento.value);
    if(!validacao.retorno){
        alert(validacao.erro);
        elemento.focus();
        return false;
    }else{
        return true;
    }
}

//Radio
function radioValue(name){
    const radios = document.getElementsByName(name);
    let radio_value;
    radios.forEach((radio) => {
        if (radio.checked)
            radio_value = radio.value;
    });

    return radio_value;
}


//Dados Pessoais 
//Nome
function validaNome(nome){

    if (!nome){
        return {
            "retorno": false, 
            "erro": "Campo não está preenchido"
        };
    }
    let qtdPalavras = nome.split(' ').length;

    if (qtdPalavras >=2) {
        return {
            "retorno": true
        };
    }
    else {
        return {
            "retorno": false, 
            "erro": "Digite o nome completo"
        };
    }
}

// validacao preenchimento
function validaPreenchimento (valor) {
    if (!valor){
        return {
            "retorno": false, 
            "erro": "O campo deve ser preenchido"
        };
    }
    else {
        return {
            "retorno": true
        };
    }
}

function onlyNumbers(text){
    return text.replace(/\D/g, '');
}

function validaNumCaracteres (valor,nCaracteres){
    let contarCaracteres = valor.length;
    if (contarCaracteres == nCaracteres) {
        return {
            "retorno": true
        };
    }
    else {
        return {
            "retorno": false,
            "erro": "O número de caracteres deve ter " + nCaracteres + " caracteres"
        };
    }
}