<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa - Entre ou cadastre-se</title>
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
                <a class="nav-link text-white" href="./sair.php"> Sair </a>
            </li>
        </ul>
    </nav>
    <div class="container">
        <h1 class="form-row justify-content-center mt-5">Finalizar Cadastro</h1>

        <form class="mt-5" onsubmit="return validateForm(event)" action="../../backend/servidor/acesso_complemento_cadastro.php" method="post">

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Renda</label>
                    <input type="number" class="form-control w-20" placeholder="Digite aqui">
                </div>

                <div class="form-group col-md-4">
                    <label for="inputAddress">Profissão:</label>
                    <input type="text" class="form-control" placeholder="Ex. Agricultor">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="colaborar">Colaborar com a comunidade?</label>
                    <input type="text" class="form-control" placeholder="Sim ou Não">
                </div>
                <div class="form-group col-md-4">
                    <label for="colaborar">Quantas pessoas mora com você?</label>
                    <input type="number" class="form-control" placeholder="Digite a quantidade">
                </div>
                <div class="form-group col-md-4">
                    <label for="colaborar">Telefone para contato:</label>
                    <input type="number" class="form-control" placeholder="Ex: 11 95200-0000">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputAddress2">Rua:</label>
                    <input type="text" class="form-control" placeholder="Ex: Rua, Av, Viela. . ." required>
                </div>
                <div class="form-group col-md-1">
                    <label for="inputAddress2">Numero:</label>
                    <input type="text" class="form-control" placeholder="Ex: 33">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputAddress2">Complemento:</label>
                    <input type="text" class="form-control" placeholder="Ex: Casa 2">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputAddress2">Bairro:</label>
                    <input type="text" class="form-control" placeholder="Ex: Vila Anchieta" required>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputCity">Cidade</label>
                    <input type="text" class="form-control" placeholder="Ex: São Paulo" required>
                </div>

                <div class="form-group col-md-2">
                    <label for="inputCEP">CEP:</label>
                    <input type="number" class="form-control" placeholder="Ex: 08100-000" required>
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEstado">Estado:</label>
                    <select id="inputEstado" class="form-control" required>
                        <option selected> SP </option>
                        <option> RJ </option>
                    </select>
                </div>
            </div>
            <div class="form-row justify-content-center">
                <button type="submit" class="btn mt-3 btn-primary w-50">Atualizar</button>
            </div>
        </form>
    </div>


    <script src="./assets/js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>