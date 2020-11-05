<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ecocasa";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Aconexão de BD falhou: " . mysqli_connect_error());
} else {
    echo "cadastrado com sucesso;";
}
?>

<?php
$sql = "select * from moradores";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($rows = $result->fetch_assoc()) {
?>
        <div>
            <p><?php echo $rows["nome"]; ?></p>

        </div>
<?php
    }
} else {
    echo "Nenhum morador cadastrado";
}
?>