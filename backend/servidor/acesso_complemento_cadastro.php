<?php

$email = $_POST['email'];
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

if (strlen($telefone) > 10 && strlen($cidade) > 3 ) {
 
    include_once('./conn.php');

    $sql = "SELECT * FROM moradores_complemento WHERE email = $email";

    $resultadoConsulta = $conn->query($sql);

    $moradores = $resultadoConsulta->fetch(PDO::FETCH_ASSOC);
            
    $_SESSION['email'] = $moradores['email'];
    
    
    echo "<script>
            alert('Seu cadastro já está completo, não é necessário inserir novas informações!')
            window.location.href = '../../frontend/src/home_usuario.php'      
        </script>";

}   

else{
    $sql1 = "INSERT INTO moradores_complemento (email, renda, profissao, colaborar, qtd_moradores, telefone, endereco, numero, complemento, bairro, cidade, cep, uf)
    VALUES ('$email', '$renda', '$profissao', '$colaborar', '$qtd_moradores', '$telefone', '$endereco', '$numero', '$complemento', '$bairro', '$cidade', '$cep', '$uf')"; 

    echo "<script>
            alert('Cadastro efetuado com sucesso!')
            window.location.href = '../../frontend/src/home_usuario.php'      
        </script>";
}

