<?php

$conn = mysqli_connect("localhost", "root", "", "ecocasa");

if (!$conn) {

    die("Erro ao realizar conexão com o Banco de Dados" . mysqli_connect_error());
}