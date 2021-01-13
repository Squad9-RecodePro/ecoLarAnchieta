<?php

include_once('./conn.php');

$titulo = $_POST['titulo'];
$imagem = $_POST['imagem'];
$descricao = $_POST['descricao'];
$nvagas = $_POST['nvagas'];

$id  = $_GET['id'];

$sql = "UPDATE voluntariado SET titulo = '$titulo', imagem = '$imagem', descricao = '$descricao', nvagas = '$nvagas' WHERE id = $id";

$result = $conn->query($sql);

header('Location: ../../frontend/src/trabalho_voluntario_admin.php');