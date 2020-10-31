<?php
session_start();

//Dados um include da conexao para que o arquivo seja devidamente usado por aqui
include('conexao.php');


//Verificamos se o usuário digitou algo no cmapo email e senha. Caso negativo, retornamos ele para a página de login
if(empty($_POST['email']) || empty($_POST['senha'])){
    header('Location: login.html');
    exit();
}

//pegamos os dados digitados pelo usuário
$email = mysqli_real_escape_string($conexao, $_POST['email']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

//Verificamos em nosso banco de dados se as informações cooincidem
$query = "select usuario_id, usuario from usuario where usuario = '{$email}' and senha = '{$senha}";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if ($row == 1){
    $_SESSION['email'] = $email;
    header('Location: painel.html');
    exit();
}
else{
    header('Location: login.html');
    exit();
}


?>