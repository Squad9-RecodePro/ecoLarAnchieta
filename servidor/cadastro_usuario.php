<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];

    if (strlen($nome) > 3 && strlen($email) > 3 && strlen($senha) > 3 && $senha === $conf_senha) {
        
        $senha_cripto = md5($senha);

        // $conn = mysqli_connect(host, user, senha, database);
        $conn = mysqli_connect("localhost", "root", "", "ecocasa");

        $sql = "INSERT INTO usuarios (nome, email, senha) values ('$nome', '$email', '$senha_cripto')";
        $conn->query($sql); 
        
        echo "<script>
        alert('Cadastro Efetuado')
        window.location.href = 'login_usuario.php'
        </script>
            "; 
    }
    else if (strlen($nome) <=3) {

        echo "<script>
        alert('Digite um nome valido para efetuar o cadastro')
        window.location.href = 'cadastro_usuario.php'
        </script>
            "; 

    }
    else if (strlen($email) <= 3) {

        echo "<script>
        alert('Digite um email valido para efetuar o cadastro')
        window.location.href = 'cadastro_usuario.php'
        </script>
            ";
    }
    else if (strlen($senha) <= 3) {

        echo "<script>
        alert('Digite uma senha valida para efetuar o cadastro')
        window.location.href = 'cadastro_usuario.php'
        </script>
            ";
    }
    else if ($senha != $conf_senha) {

        echo "<script>
        alert('Digite uma senha valida para efetuar o cadastro')
        window.location.href = 'cadastro_usuario.php'
        </script>
            ";
    }









/*
function apenasNumero($str){ 
    return preg_replace("/[^0-9]/", "", $str); 
}

function validaemail($email) {
    return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email)) ? FALSE : TRUE;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST ["nome"];
    $salario = $_POST ["salario"];
    $profissao = $_POST ["profissao"];
    if (isset($_POST["checkColaboracao"])){

        $checkColaboracao = "SIM";
    }
    else {

        $checkColaboracao = "NAO";
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
            echo "<script>
                    alert('Se não tiver número, digite o número SN')
                    window.location.href = '../cadastro.php'      
                </script>";
        }

        if ($key == 'telefone') {
            if(strlen(apenasNumero($value)) != 11 && strlen(apenasNumero($value)) != 13){
                echo "<script>
                        alert('Digite o telefone com DDD, Ex.(DDD + telefone)')
                        window.location.href = '../cadastro.php'         
                    </script>";
            }
        }

        if ($key == 'cep') {
            if(strlen(apenasNumero($value)) != 8){
                echo "<script>
                        alert('O CEP deve conter 8 números!')
                        window.location.href = '../cadastro.php'         
                    </script>";
            }
        }

        if ($key == 'email') {
            if(!validaemail($value)){
                echo "<script>
                        alert('Digite um email valido!')
                        window.location.href = '../cadastro.php'        
                    </script>";
            }
        }

        if ($key == 'senha') {

            if(strlen($value) < 6) {

                echo "<script>
                        alert('A senha deve ter pelo menos 6 caracteres!')
                        window.location.href = '../cadastro.php'         
                    </script>";
            }
        }
    }

    if ($senha != $confSenha) {

        echo "<script>
                alert('As senhas devem ser iguais!')
                window.location.href = '../cadastro.php'      
            </script>"; 
    }

    $senha_cripto = md5($senha);
    $conn = mysqli_connect("localhost", "root", "", "ecocasa");

    $sql = "INSERT INTO moradores (nome, renda, profissao, colaborar, qtd_moradores, telefone, endereco, numero, complemento, bairro, cidade, cep, uf, email, senha)
    VALUES ('$nome', '$salario', '$profissao', '$checkColaboracao', '$qtdPessoas', '$telefone', '$endereco', '$numeroRua', '$complemento', '$bairro', '$cidade', '$cep', '$estado', '$email', '$senha_cripto')";

    if (!$conn) {

        die("Erro ao realizar conexão com o Banco de Dados" . mysqli_connect_error());

    }
    else {
        $conn->query($sql);

        echo "<script>
                alert('Cadastro efetuado com sucesso!')
                window.location.href = '../login.php'      
            </script>";
    }

}