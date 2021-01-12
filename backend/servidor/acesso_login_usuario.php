<?php
// Sessão iniciada!
session_start();
// Recebendo os dados do form
$email = $_POST['email'];
$senha = $_POST['senha'];

if (strlen($email) > 3 && strlen($senha) > 3) {
    //criptografia da senha
    $senha_cripto = md5($senha);
    
    // Conexão com o banco
    //include_once('./conn.php');
    $conn = mysqli_connect("localhost", "root", "", "ecocasa");

    // Instrução SQL
    $sql = "SELECT * FROM moradores WHERE email = '$email' AND senha = '$senha_cripto'";
    // Execução da instrução sql
    $resultadoConsulta = $conn->query($sql);
    // Essa variavel recebe a lista de moradores cadastrados no banco
    $moradores = mysqli_fetch_all($resultadoConsulta);
    // Essas variaveis globais recebem o valor da consulta no banco
    $_SESSION['nome'] = $moradores[0][1];
    $_SESSION['email'] = $moradores[0][2];
    $_SESSION['senha'] = $moradores[0][3];
    // Redirecionado para a pagina de user
    header('Location: ../../frontend/src/home_usuario.php');
}
else {
    echo "
        <script>
            alert('Email ou Senha invalidos!')
            location.href = '../../frontend/src/login_usuario.php'
        </script>    
    ";
}