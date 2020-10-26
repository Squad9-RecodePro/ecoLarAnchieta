function validateForm(){
    
    let result = true; // Retorno se o campo é válido ou não

    // A função busca e retorna um elemento através do seu identificador, nesse caso o form-cadastro
    let form = document.getElementById("form-cadastro");

    // Transforma o elemento form em um array de elementos
    let elements = Array.from(form);

    // Filtrando os elementos do tipo submit
    elements = elements.filter(el => el.getAttribute('type').toLowerCase() !== 'submit');

    // Executa a função para cada elemento do array 
    for (let i = 0; i < elements.length; i++){
        let el = elements[i];
        let error; //Motivo do erro

        // Verifica se o type do elemento é igual a "email"
        if(el.type.toLowerCase() == 'email'){
            
            // Verifica se o email não é válido
            if (!validaEmail(el.value)){
                error = "Campo de e-mail inválido!";
                result = false;
            }
        //Verifica se type do elemento é igual a "password"
        }else if (el.type.toLowerCase() == 'password'){
            
            //Verifica se a senha é válida
            if (!validaSenha(el.value)){
                error = 'Senha inválida!';
                result = false;
            }
        //Verifica se o identicador é igual a cpf
        } else if (el.id == 'cpf'){
       
             //Verifica se o cpf é válido
             if (!validaCPF(el.value)){
                 error = 'cpf inválido!';
                 result = false;
             }
        } 
        //Verifica se o identificador é igual a cep
        else if (el.id == 'cep') {

            //Verifica se o cep é válido
            if (!validaCEP(el.value)){
                error = 'cep inválido!';
                result = false;
            }
        }
        else if (el.id == 'nome') {

            //Verifica se o cep é válido
            if (!validaEspaco(el.value)){
                error = 'nome inválido!';
                result = false;
            }
        }
        else if (el.required){
            if (!validaTamanhoTexto(el.value,1)){
                error = 'Preencha o campo!';
                result = false;
            }
        }

        if (!result){
            alert(error);
            el.focus();
            return result;
        }
    }
    
    // Seleciona as senhas
    pws = elements.filter(el => el.getAttribute('type').toLowerCase() == 'password');

    // Verifica se são senhas iguais
    if(!pws.every( (val, _, arr) => val.value === arr[0].value )){
        alert('As senhas devem ser iguais!');
        result = false;
    }

    return result;
}

// Valida o número de caracteres
// Caso o max seja utilizado, ele verifica se o número está entre o minímo e o máximo
// caso apenas o min seja utilizado, ele verifica se o texto têm pelo menos o número minímo de caracteres
const validaTamanhoTexto = (text, min, max) => {
    if (text){
        if(max){
            return min <= text.length <= max
        }else{
            return text.length >= min
        }
    } else{
        return false;
    }
}

// Valida se existem letras
// Lógica foi se os texto em minúsculo e maiúsculo são iguais
const validaLetras = (text) => text.toLowerCase() != text.toUpperCase()

// Valida se existem número
// Utilizando Regx para verificar se existem números no texto
const validaNumero = (text) => Boolean(text.match('[0-9]'))

// Valida se existem letras, caso não tenha valida se existem números 
// Se existem números valida a quantidade de caracteres 
const validaCPF = (cpf) => { 
    if (validaLetras(cpf)){
        return false;
    }else if (validaNumero(cpf)){
        return validaTamanhoTexto(cpf, 11,11)
    }
    return false;
}

// Valida se existem letras, caso não tenha valida se existem números 
// Se existem números valida a quantidade de caracteres 
const validaCEP = (cep) => {
    if (validaLetras(cep)){
        return false;
    }else if (validaNumero(cep)){
        return validaTamanhoTexto (cep, 8,8)
    }
    return false;
}
//Valida se existem letras, valida se existem números e conta a quantidade de caracteres
const validaSenha = (pw) => {
    return validaLetras(pw) && validaNumero(pw) && validaTamanhoTexto (pw, 6,15)
}
//Conta a quantidade de caracteres (o email deve conter pelo menos 5 caracteres), 
//valida se o e-mail contém @ a partir da posição 1 e por último valida se o email contem "." a partir da posição 3.
const validaEmail = (email) => {
    return validaTamanhoTexto (email, 5) && email.includes("@",1) && email.includes(".",3)
}

// Valida se existe um espaço na palavra
const validaEspaco = (text) => text.split(' ').length > 1