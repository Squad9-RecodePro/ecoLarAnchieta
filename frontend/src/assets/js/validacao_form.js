function validateForm(){
    const formulario = document.getElementById('form-cadastro');
    
    const nome = formulario.nome;
    const email = formulario.email;
    const senha = formulario.senha;
    const confSenha = formulario['conf_senha'];

    const elementosObrigatorios = [
        nome,
        email,
        senha,
        confSenha
    ];

    //Valida os elementos obrigatórios, ou seja todos 
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

    // Validando senha
    if (senha.value != confSenha.value){
        alert("As senhas devem ser iguais!");
        senha.focus();
        return false;
    }
    return true;
}

//Criando a função para validar o email
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
  
//Função de validar qualquer campo
//Recebe dois parâmetros, o primeiro é o elemento HTML e o segundo é a função de validação
//Função de validação precisa retornar um objeto com as propriedades retorno do tipo booleano e erro do tipo string
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
    if (valor){
        return {
            "retorno": true
        };
    }
    else {
        return {
            "retorno": false, 
            "erro": "O campo deve ser preenchido"
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
            "erro": "O número de caracteres deve ter " + nCaracteres + " caracteres"
        };
    }
}
