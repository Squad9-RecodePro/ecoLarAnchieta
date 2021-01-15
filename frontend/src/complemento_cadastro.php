<!DOCTYPE html>
<?php
include_once('../../backend/servidor/conn.php');
// Sessão iniciada!
session_start();
?>

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
        <?php
        $sql = "SELECT m.id as id_moradores, m.nome, m.email, mc.id as id_moradores_complemento, mc.renda, mc.profissao, mc.colaborar, mc.qtd_moradores, mc.telefone, mc.endereco, mc.numero, mc.complemento, mc.bairro, mc.cidade, mc.cep, mc.uf FROM moradores m left join moradores_complemento mc on m.id = mc.idMoradores WHERE m.id = ". $_SESSION['id'];
        // tem que ser o select from moradores
        $result = $conn->query($sql);

        if ($result->rowCount() > 0) {
            //while ($rows = $result->fetch_assoc()) {
            foreach($result->fetchAll(PDO::FETCH_ASSOC) as $rows){ 

                $_SESSION['id'] = $rows['id_moradores'];
                $_SESSION['idMoradores'] = $rows['id_moradores'];
        ?>
        <form class="mt-5" onsubmit="return validateForm(event)" action="../../backend/servidor/acesso_complemento_cadastro.php" method="post">


            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="email">Email</label>
                    <input name="email" type="email" class="form-control" placeholder="Email" value="<?php echo $rows["email"]; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label for="renda">Renda</label>
                    <input name="renda" type="number" class="form-control w-20" placeholder="Digite aqui" value="<?php echo $rows["renda"]; ?>">
                </div>

                <div class="form-group col-md-4">
                    <label for="profissao">Profissão:</label>
                    <input name="profissao" type="text" class="form-control" placeholder="Ex. Agricultor" value="<?php echo $rows["profissao"]; ?>">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="colaborar">Colaborar com a comunidade?</label>
                    <input name="colaborar" type="text" class="form-control" placeholder="Sim ou Não" value="<?php echo $rows["colaborar"]; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label for="qtd_moradores">Quantas pessoas mora com você?</label>
                    <input name="qtd_moradores" type="number" class="form-control" placeholder="Digite a quantidade" value="<?php echo $rows["qtd_moradores"]; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label for="telefone">Telefone para contato:</label>
                    <input name="telefone" type="text" class="form-control" placeholder="Ex: 11 95200-0000" value="<?php echo $rows["telefone"]; ?>">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="endereco">Rua:</label>
                    <input name="endereco"type="text" class="form-control" placeholder="Ex: Rua, Av, Viela. . ." value="<?php echo $rows["endereco"]; ?>" required >
                </div>
                <div class="form-group col-md-1">
                    <label for="numero">Numero:</label>
                    <input name="numero" type="text" class="form-control" placeholder="Ex: 33" value="<?php echo $rows["numero"]; ?>">
                </div>
                <div class="form-group col-md-3">
                    <label for="complemento">Complemento:</label>
                    <input name="complemento" type="text" class="form-control" placeholder="Ex: Casa 2" value="<?php echo $rows["complemento"]; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label for="bairro">Bairro:</label>
                    <input name="bairro" type="text" class="form-control" placeholder="Ex: Vila Anchieta" value="<?php echo $rows["bairro"]; ?>" required>
                </div>

                <div class="form-group col-md-6">
                    <label for="cidade">Cidade</label>
                    <input name="cidade" type="text" class="form-control" placeholder="Ex: São Paulo"  value="<?php echo $rows["cidade"]; ?>" required>
                </div>

                <div class="form-group col-md-2">
                    <label for="cep">CEP:</label>
                    <input name="cep" type="number" class="form-control" placeholder="Ex: 08100-000" value="<?php echo $rows["cep"]; ?>" required>
                </div>

                <div class="form-group col-md-4">
                    <label for="uf">Estado:</label>
                    <select name="uf" id="inputEstado" class="form-control" value="<?php echo $rows["uf"]; ?>" required>
                        <option selected> SP </option>
                        <option> RJ </option>
                    </select>
                </div>
            </div>
            <div class="form-row justify-content-center">
                <button type="submit" class="btn mt-3 btn-primary w-50">Atualizar</button>
            </div>
        </form>
        <?php
            }
        } else {
            echo "<h4>Nenhum morador cadastrado</h4>";
        }
        ?>
    </div>


    <script src="./assets/js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>