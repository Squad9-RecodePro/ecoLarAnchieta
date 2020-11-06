<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ecocasa";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Aconexão de BD falhou: " . mysqli_connect_error());
} else {
    echo "cadastrado";
}

// $titulo = $_POST['titulo'];
// $imagem = $_POST['imagem'];
// $descricao = $_POST['descricao'];
// $nvagas = $_POST['nvagas'];

// $sql = "INSERT INTO voluntariado (titulo, imagem, descricao, nvagas)
// VALUES ('$titulo', '$imagem', '$descricao', '$nvagas')";
