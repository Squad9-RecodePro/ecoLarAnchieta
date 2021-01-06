<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$conf_senha = $_POST['conf_senha'];

if (strlen($nome) > 3 && strlen($email) > 3 && strlen($senha) > 3 && $senha === $conf_senha) {

    $senha_cripto = md5($senha);
 
    include_once('./conn.php');

    $sql = "INSERT INTO moradores (nome, email, senha)
    VALUES ('$nome', '$email', '$senha_cripto')"; 

    if (!$conn) {       

    die("Erro ao realizar conexão com o Banco de Dados" . mysqli_connect_error());

    }
    else {
    $conn->query($sql);

    echo "<script>
            alert('Cadastro efetuado com sucesso! Realize o login')
            window.location.href = 'http://localhost:3000/UserLogin'      
        </script>";
    }

}  