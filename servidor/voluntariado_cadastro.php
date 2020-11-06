<?php 

include_once('./conn.php');

$titulo = $_POST['titulo'];
$imagem = $_POST['imagem'];
$descricao = $_POST['descricao'];
$nvagas = $_POST['nvagas'];

$id  = $_GET['id'];

$sql = "INSERT INTO voluntariado (titulo, imagem, descricao, nvagas)
VALUES ('$titulo', '$imagem', '$descricao', '$nvagas')";

$result = $conn->query($sql);

header('Location: ../trabalho_voluntario_admin.php');


