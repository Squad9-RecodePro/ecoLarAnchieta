<?php
session_start();
if (!isset($_SESSION['nome'])) {
    header('Location: index.php');
    exit;
}else{

    $conn = mysqli_connect("localhost", "root", "", "sistema");

    $postagens = $conn->query("SELECT * FROM postagens JOIN usuarios WHERE fk_usuario = id");

    foreach ($postagens as $postagem){

        echo $postagem 
    }

}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa - Cadastre-se</title>
    <link rel="icon" href="./images/iconlogo.svg" /> <!-- Icone no Title -->

    <link rel="stylesheet" href="#" />


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <!-- Menu de navegação -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-white shadow">
        <div class="container">

            <a class="navbar-brand" href="index.html">
                <img src="./images/logopage.png" width="50%" title="Logo Eco Casa">
            </a>

            <button class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
						<a class="nav-link text-dark" href="#">Meu Perfil</a>
					</li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="sair.php">Sair</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</body>