<?php

//Inicio da conexão com o banco de dados
define('Hostname', 'localhost');
define('Username', 'root');
define('Password', '');
define('DB', 'administradores');

$conn = mysqli_connect(Hostname, Username, Password, DB) or die('Não foi possível conectar'); 

//Aqui verificamos se os campos de email e senha não estão vazios
if(empty($_POST['email']) || empty($_POST['senha'])){
    header('Location: ./index.php');
    exit();
}

$email = $_POST['email'];
$senha = $_POST['senha'];

$query = "select * from adm where email = '{$email}' and senha = '{$senha}' ";

$result = mysqli_query($conn, $query);

$row = mysqli_num_rows($result);

if($row == 1){
    $_SESSION['email'] = $email;
    header('Location: ../home_admin.php');
    exit();
}
else{
    header('Location: ../index.php');
    exit();
}

?>