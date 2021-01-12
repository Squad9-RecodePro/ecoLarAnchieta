<?php
session_start();
// Resgatando dados do input
$email = $_POST['email'];
$senha = $_POST['senha'];

if (strlen($email) > 3 && strlen($senha) > 3) {
    //criptografia da senha
    $senha_cripto = md5($senha);

    // Conexão com o banco
    include_once('./conn.php');
    //$conn = mysqli_connect("localhost", "root", "", "ecocasa");
    
    // Instrução SQL
    $sql = "SELECT * FROM adm WHERE email = '$email' AND senha = '$senha_cripto' ";
    
    // Execução da instrução sql
    $resultadoConsulta = $conn->query($sql);
    
    // Essa variavel recebe a lista de moradores cadastrados no banco
    //$adm = mysqli_fetch_all($resultadoConsulta);
    $adm = $resultadoConsulta->fetch(PDO::FETCH_ASSOC);

    // Essas variaveis globais recebem o valor da consulta no banco
    $_SESSION['nome'] = $adm['nome'];
    $_SESSION['email'] = $adm['email'];
    $_SESSION['senha'] = $adm['senha'];
    
    // Redirecionado para a pagina de adm
    header('Location: ../../frontend/src/home_admin.php');
}
else {
    echo "
        <script>
            alert('Email ou Senha invalidos!')
            location.href = '../../frontend/src/login_admin.php'
        </script>    
    ";
}

