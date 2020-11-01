<?php

//Aqui definimos os parametros para a conexao com o banco de dados
define('Hostname', 'sql311.epizy.com');
define('Username', 'epiz_27075315');
define('Password', 'SByyuy8eL3Rwqrr');
define('DB', 'epiz_27075315_XXX');

//Fazemos uma conexao com o banco de dados passando os parametros definidos anteriormente
$conexao = mysqli_connect(Hostname, Username, Password, DB);

//Verificamos se a conexão foi realizada com sucesso
if(!$conexao){
    echo "Não conectado";
}

else{
    echo "Conectado com sucesso";
}

?>