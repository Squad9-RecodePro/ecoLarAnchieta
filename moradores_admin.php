<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa</title>
    <link rel="icon" href="./images/iconlogo.svg" />

    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./home_admin.php">
                <img src="./images/logopage.png" width="50%" title="Logo EcoCasa">
            </a>
            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
                        <a class="nav-link text-white" href="./servidor/sair.php">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="row m-auto container align-items-center py-5" style="height: 88vh">
        <div class="table-responsive card">
            <div class="card-header bg-dark d-flex align-items-center justify-content-between" style="height: 70px;">
                <h4 class="text-white mb-0">Moradores</h4>
            </div>
            <table class="table table-hover text-center my-0">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Elnatan</td>
                        <td>elnatan@hotmail.com</td>
                        <td>
                            <button class="btn btn-info">Editar</button>
                            <button class="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Thamirez</td>
                        <td>thamirez@hotmail.com</td>
                        <td>
                            <button type="submit" class="btn btn-info">Editar</button>
                            <button type="submit" class="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Gustavo</td>
                        <td>gustavo@hotmail.com</td>
                        <td>
                            <button class="btn btn-info">Editar</button>
                            <button class="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>




    <script src="./js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>
</body>

</html>