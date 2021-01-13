<?php

$renda = $_POST['renda'];
$profissao = $_POST['profissao'];
$colaborar = $_POST['colaborar'];
$qtd_moradores = $_POST['qtd_moradores'];

$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];
$numero = $_POST['numero'];
$complemento = $_POST['complemento'];

$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$cep = $_POST['cep'];
$uf = $_POST['uf'];

if (strlen($telefone) == 11 && strlen($cidade) > 3 ) {
 
    include_once('./conn.php');

    $sql = "INSERT INTO moradoresComplemento (renda, profissao, colaborar, qdt_moradores, telefone, endereco, numero, complemento, bairro, cidade, cep, uf)
    VALUES ('$renda', '$profissao', '$colaborar', '$qtd_moradores', '$telefone', '$endereco', '$numero', '$complemento', '$bairro', '$cidade', '$cep', '$uf')"; 

    echo "<script>
            alert('Cadastro efetuado com sucesso!')
            window.location.href = '../../frontend/src/home_usuario.php'      
        </script>";
}    

