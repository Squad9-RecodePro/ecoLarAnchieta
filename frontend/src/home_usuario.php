<?php
session_start();
// Se não existir um valor
if (!isset($_SESSION['nome'])) {
    header('Location: ./login_usuario.php');
    exit;
    // session_destroy();
}
?>

<?php
include_once('../../backend/servidor/conn.php');
//$conn = mysqli_connect("localhost", "root", "", "ecocasa");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa - Home</title>
    <link rel="icon" href="./assets/images/iconlogo.svg" />

    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./home_usuario.php">
                <img src="./assets/images/logopage.png" width="50%" title="Logo EcoLar">
            </a>
        </div>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-white" href="./complemento_cadastro.php"> Completar Cadastro </a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white" href="./sair.php"> Sair </a>
            </li>
        </ul>
    </nav>

    <div class="card text-center">
        <div class="card-body">
            <h5 class="card-title">Seja Bem-vindo <?php echo $_SESSION['nome']; ?>, deseja ser um voluntario?</h5>
            <p class="card-text">Veja algumas vagas para que você possa colaborar com a sua comunidade:</p>
        </div>
    </div>

    <?php
    $sql = "SELECT * from voluntariado";
    // alterar para o select from
    $result = $conn->query($sql);

    if ($result->rowCount() > 0) {
        // while ($rows = $result->fetch(PDO::FETCH_ASSOC)) {
        // while ($rows = $result->fetch_assoc()) {
        //var_dump($result->fetch(PDO::FETCH_ASSOC)); 
        foreach ($result->fetchAll(PDO::FETCH_ASSOC) as $rows) {
    ?>
            <div class="container mt-5 mb-5 w-50">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="card shadow-lg">
                            <div class="card-body">
                                <img src="<?php echo $rows["imagem"]; ?>">
                                <h5 class="card-title"><?php echo $rows["titulo"]; ?></h5>
                                <p class="card-text">Descrição:</br><?php echo $rows["descricao"]; ?></p>
                                <p class="card-text">N° de vagas: <?php echo $rows["nvagas"]; ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }
    } else { ?>

        <div class="alert alert-secondary" role="alert">
            <h4 class="alert-heading">Oops!</h4>
            <p>Ainda não temos nenhuma vaga de voluntariado para se cadastrar.</p>
            <hr>
            <p class="mb-0">Obrigado, fique atento pois futuramente poderá surgir novas vagas!</p>
        </div>
    <?php  } ?>



    <script src="./assets/js/anima-num.js"></script>
    <script src="./js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>