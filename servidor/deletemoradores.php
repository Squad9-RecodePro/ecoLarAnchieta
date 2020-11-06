<?php

include_once('./conn.php');

$id  = $_GET['id'];

$sql = "DELETE FROM moradores where id = $id";

$result = $conn->query($sql);

header('Location: ../moradores_admin.php');