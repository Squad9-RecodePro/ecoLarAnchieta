function validateForm(){
    let formulario = document.getElementById('form-cadastro');
    
    let nome = formulario.nome;
    let salario = formulario.salario;
    let profissao = formulario.profissao;
    let checkColaboracao = formulario.checkColaboracao.checked;
    let qtdmoradores = radioValue("qtd-pessoas");
    let telefone = formulario.telefone;
    let endereco = formulario.endereco;
    let numeroRua= formulario['numero-rua'];
    let complemento = formulario.complemento;
    let bairro = formulario.bairro;
    let cidade = formulario.cidade;
    let cep = formulario.cep;
    let email = formulario.email;
    let senha = formulario.senha;
    let confSenha = formulario['conf-senha'];

    // Validando Nome
    let validacaoNome = validaNome(nome.value);
    if(!validacao.retorno){
        alert(validacao.erro);
        nome.focus();
        return false;
    }

    //salario

}

//Radio
function radioValue(name){
    let radios = document.getElementsByName(name);
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
            "erro": "O número de caracteres deve ser " + nCaracteres
        };
    }
}