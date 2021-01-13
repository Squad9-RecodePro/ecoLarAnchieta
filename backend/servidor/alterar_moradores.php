<?php

include_once('./conn.php');

$nome = $_POST['nome'];
$email = $_POST['email'];

$id  = $_GET['id'];

$sql = "UPDATE moradores SET nome = '$nome', email = '$email' WHERE id = $id";

$result = $conn->query($sql);

header('Location: ../../frontend/src/moradores_admin.php');