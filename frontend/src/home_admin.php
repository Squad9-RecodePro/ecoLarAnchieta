<?php
session_start();
// Se não existir um valor
if (!isset($_SESSION['email'])) {
    header('Location: ./login_admin.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa</title>
    <link rel="icon" href="./assets/images/iconlogo.svg" />

    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./home_admin.php">
                <img src="./assets/images/logopage.png" width="50%" title="Logo EcoLar">
            </a>
            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="./moradores_admin.php">Moradores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="./trabalho_voluntario_admin.php">Trabalhos voluntários</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="./sair.php">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="row m-auto container align-items-center" style="height: 88vh">

        <div class="card col-lg-6 col-12 p-5 text-center border shadow">
            <h3>Total de Familias na Ocupação</h3>
            <h1>1100</h1>
        </div>

        <div class="card col-lg-6 col-12 p-5 text-center border shadow">
            <h3>Quantidade de casas</h3>
            <h1>8</h1>
        </div>

    </main>


    <script src="./js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>