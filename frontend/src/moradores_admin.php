<?php
include_once('../../backend/servidor/conn.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa</title>
    <link rel="icon" href="./assets/images/iconlogo.svg" />

    <link rel="stylesheet" href="./assets/css/index.css">
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

    <main class="row m-auto align-items-center py-5" style="height: 88vh">
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
                        <th scope="col">Renda</th>
                        <th scope="col">Profissão</th>
                        <th scope="col">Colaborar</th>
                        <th scope="col">Moradores</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Nº</th>
                        <th scope="col">Complemento</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">CEP</th>
                        <th scope="col">UF</th>

                    </tr>
                </thead>
                <tbody>
                    <?php
                    $sql = "SELECT m.id as id_moradores, m.nome, m.email, mc.id as id_moradores_complemento, mc.renda, mc.profissao, mc.colaborar, mc.qtd_moradores, mc.telefone, mc.endereco, mc.numero, mc.complemento, mc.bairro, mc.cidade, mc.cep, mc.uf FROM moradores m left join moradores_complemento mc on m.id = mc.idMoradores";
                    // tem que ser o select from moradores
                    $result = $conn->query($sql);

                    if ($result->rowCount() > 0) {
                        //while ($rows = $result->fetch_assoc()) {
                        foreach($result->fetchAll(PDO::FETCH_ASSOC) as $rows){ 
                    ?>
                            <!-- os valores precisam ser id, nome, email -->
                            <tr>
                                <th name="<?php echo $rows['id_moradores']; ?>" scope="row"><?php echo $rows['id_moradores']; ?></th>
                                    <td><?php echo $rows['nome']; ?></td>
                                    <td><?php echo $rows["email"]; ?></td>
                                    <td><?php echo $rows["renda"]; ?></td>
                                    <td><?php echo $rows["profissao"]; ?></td>
                                    <td><?php echo $rows["colaborar"]; ?></td>
                                    <td><?php echo $rows["qtd_moradores"]; ?></td>
                                    <td><?php echo $rows["telefone"]; ?></td>
                                    <td><?php echo $rows["endereco"]; ?></td>
                                    <td><?php echo $rows["numero"]; ?></td>
                                    <td><?php echo $rows["complemento"]; ?></td>
                                    <td><?php echo $rows["bairro"]; ?></td>
                                    <td><?php echo $rows["cidade"]; ?></td>
                                    <td><?php echo $rows["cep"]; ?></td>
                                    <td><?php echo $rows["uf"]; ?></td>
                                <td>
                                    <a class="btn btn-danger" href="../../backend/servidor/deletemoradores.php?id='<?php echo $rows['id_moradores']; ?>' ">Remover</a>
                                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modalAlterar">Alterar</button>
                                </td>
                            </tr>
                    <?php
                        }
                    } else {
                        echo "<h4>Nenhum morador cadastrado</h4>";
                    }
                    ?>

                </tbody>
            </table>
        </div>
    </main>

    
    <script src="./assets/js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>


<!-- Modal -->
<div class="modal fade" id="modalAlterar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Altere os dados</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="../../backend/servidor/alterar_moradores.php?id='<?php echo $rows['id']; ?>'" method="POST">

          <input type="text" name="nome" class="form-control mt-3" placeholder="Nome" />
          <input type="text" name="email" class="form-control mt-3" placeholder="E-mail" />
          
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Alterar</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</div>