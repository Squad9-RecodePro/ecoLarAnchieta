<?php

session_start();
// Se não existir um valor
if(!isset($_SESSION['nome'])) {
    header('Location: ./login_usuario.php');
    exit;
}
?>

<?php
// session_destroy();
include_once('./servidor/conn.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa - Home</title>
    <link rel="icon" href="./images/iconlogo.svg" />

    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./home_usuario.php">
                <img src="./images/logopage.png" width="50%" title="Logo EcoCasa">
            </a>
        </div>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-white" href="<?php session_destroy();?>"> Sair </a>
            </li>
        </ul>
    </nav>
    <div class="card text-center">
        <div class="card-body">
            <h5 class="card-title">Seja Bem-vindo</h5>
            <p class="card-text">Veja algumas vagas para que você possa colaborar com a sua comunidade:</p>
        </div>
    </div>
    <?php
    $sql = "select * from voluntariado";
    // alterar para o select from
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($rows = $result->fetch_assoc()) {
    ?>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 md-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="<?php echo $rows["imagem"]; ?>">
                                <h5 class="card-title"><?php echo $rows["titulo"]; ?>titulo</h5>
                                <p class="card-text"><?php echo $rows["descricao"]; ?>descrição</p>
                                <p class="card-text"><?php echo $rows["nvagas"]; ?>numero de vagas</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <?php
        }
    } else {
        echo "Nenhum produto cadastrado";
    }
    ?>




    <script src="./js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>