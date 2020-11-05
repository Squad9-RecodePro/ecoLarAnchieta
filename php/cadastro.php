<?php

//require('conexao.php');

function apenasNumero($str){ 
    return preg_replace("/[^0-9]/", "", $str); 
}

function validaemail($email) {
    return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email)) ? FALSE : TRUE;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    print_r($_POST);
    echo "<br>";
    echo "<br>";

    $nome = $_POST ["nome"];
    $salario = $_POST ["salario"];
    $profissao = $_POST ["profissao"];
    if (isset($_POST["checkColaboracao"])){
        $checkColaboracao = true;
    }else{
        $checkColaboracao = false;
    }
    $qtdPessoas = $_POST ["qtd-pessoas"];
    $telefone = $_POST ["telefone"];
    $endereco = $_POST ["endereco"];
    $numeroRua = $_POST ["numero-rua"];
    $complemento = $_POST ["complemento"];
    $bairro = $_POST ["bairro"];
    $cidade = $_POST ["cidade"];
    $cep = $_POST ["cep"];
    $estado = $_POST ["estado"];
    $email = $_POST ["email"];
    $senha = $_POST ["senha"];
    $confSenha = $_POST ["confirmar-senha"];





    foreach($_POST as $key => $value) {
        if (empty($value) && $key != 'complemento'){
            echo "Preencha o campo '$key'";
            die();
        }

        if ($key == 'telefone') {
            if(strlen(apenasNumero($value)) != 11 && strlen(apenasNumero($value)) != 13){
                echo "O campo telefone deve conter os 11 números (DDD + Celular)";
                die();
            }
        }

        if ($key == 'cep') {
            if(strlen(apenasNumero($value)) != 8){
                echo "O campo cep deve conter os 8 números";
                die();
            }
        }

        if ($key == 'email') {
            if(!validaemail($value)){
                echo "O campo deve email deve ser um email válido";
                die();
            }
        }

        if ($key == 'senha') {
            if(strlen($value) < 6){
                echo "A senha deve conter pelo menos 6 caracteres";
                die();
            }
        }
    }

    if ($senha != $confSenha){
        echo "As senhas devem ser iguais!";
        die();
    }

    //cadastro($nome,$salario,$profissao,$checkColaboracao,$qtdPessoas,$telefone,$endereco,$numeroRua,$complemento,$bairro,$cidade,$cep,$estado,$email,$senha,$confSenha);
}


