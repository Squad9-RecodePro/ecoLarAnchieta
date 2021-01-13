<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complemento de cadastro</title>
</head>
<body>
    <form id="form-cadastro" onsubmit="return validateForm(event)" action="../../backend/servidor/acesso_complemento_cadastro.php" method="post">
        <input type="email" id="email" name="email" class="form-control mt-4" placeholder="Digite o seu email" required />
        <input type="text" id="renda" name="renda" class="form-control mt-4" placeholder="Digite a renda de sua familia" required />
        <input type="text" id="profissao" name="profissao" class="form-control mt-3" placeholder="digite sua profissão" required />
        <input type="text" id="colaborar" name="colaborar" class="form-control mt-3" placeholder="confirme se gostaria de colaborar" required />
        <input type="text" id="qtd_moradores" name="qtd_moradores" class="form-control mt-3" placeholder="digite quantas pessoas moram com você" required />
        <input type="text" id="telefone" name="telefone" class="form-control mt-3" placeholder="Informe seu telefone" required />
        <input type="text" id="endereco" name="endereco" class="form-control mt-3" placeholder="Informe seu endereço" required />
        <input type="text" id="numero" name="numero" class="form-control mt-4" placeholder="Digite o número" required />
        <input type="text" id="complemento" name="complemento" class="form-control mt-3" placeholder="informe o complemento" required />
        <input type="text" id="bairro" name="bairro" class="form-control mt-3" placeholder="informe seu bairro" required />
        <input type="text" id="cidade" name="cidade" class="form-control mt-3" placeholder="Informe a cidade" required />
        <input type="text" id="cep" name="cep" class="form-control mt-3" placeholder="Informe o cep" required />
        <input type="text" id="uf" name="uf" class="form-control mt-3" placeholder="Informe a UF" required />

        <button type="submit" class="btn btn-custom mt-3 w-100">Cadastrar</button>
    </form>
</body>
</html>