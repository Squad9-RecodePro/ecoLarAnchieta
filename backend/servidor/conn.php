<?php

// $conn = mysqli_connect("localhost", "root", "", "ecocasa");
$conn = new PDO("mysql:host=localhost;dbname=ecocasa;charset=utf8", "root", "");

if (!$conn) {

    die("Erro ao realizar conexão com o Banco de Dados" . mysqli_connect_error());
}