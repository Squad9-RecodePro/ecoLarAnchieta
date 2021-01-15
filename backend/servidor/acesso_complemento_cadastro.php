<?php
// Sessão iniciada!
session_start();
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

    //$sql = "SELECT * FROM moradores WHERE email = '$email'";

    //$resultadoConsulta = $conn->query($sql);
    //echo gettype ($resultadoConsulta) . "<br>";

    //$moradores = $resultadoConsulta->fetch(PDO::FETCH_ASSOC);
            
    //$_SESSION['id'] = $moradores['id'];
    //$_SESSION['idMoradores'] = $moradores['id'];
    
    $idMoradores=$_SESSION['idMoradores'];

    $sql1 = "REPLACE INTO moradores_complemento (idMoradores, renda, profissao, colaborar, qtd_moradores, telefone, endereco, numero, complemento, bairro, cidade, cep, uf)
    VALUES ($idMoradores, '$renda', '$profissao', '$colaborar', '$qtd_moradores', '$telefone', '$endereco', '$numero', '$complemento', '$bairro', '$cidade', '$cep', '$uf')"; 

    $conn->query($sql1);

    echo "<script>
    alert('Cadastro efetuado com sucesso!')
    window.location.href = '../../frontend/src/home_usuario.php'      
    </script>"; 

    

}   

else{
    
     echo "<script>
             alert('!')
             window.location.href = '../../frontend/src/home_usuario.php'      
         </script>";

}

