import React from 'react';
import './styles.css';
import Menu from '../../components/Menu/mainMenu';


function AdminPanel(){
    return(
        <>
            <Menu page1={"ResidentsAdmin"} title1={"Moradores"} page2={"VolunteerWorks"} title2={"Trabalhos Voluntarios"} page3={""} title3={"Sair"}>
    
            </Menu>
            
            <div className="container" id="container">
                <div className="row justify-content-center"> 
                    <div class="card col-lg-5 text-center border shadow">
                        <h3>Total de Familias na Ocupação</h3>
                        <h1>1100</h1>
                    </div>

                    <div class="card col-lg-5 text-center border shadow">
                        <h3>Moradores cadastrados</h3>

                        {/* pessoal do back, tem que dar um jeito de fazer essa logica em javascript */}

                        {/* <?php
                            // $result_moradores = "SELECT * FROM moradores";
                            // $resultado_moradores = mysqli_query($conn, $result_moradores);
                            // while($row_usuario = )
                            include_once('../../backend/servidor/conn.php');
                            $sql = "SELECT * from moradores";
                            $result = $conn->query($sql);
                            if ($result->rowCount() > 0) {
                                $i = 0;
                                foreach($result->fetchAll(PDO::FETCH_ASSOC) as $rows){
                                    $i = $i + 1;
                                }
                            } else {
                                $i = ("0");
                            }
                        ?>
                        <h1><?php echo $i?></h1> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;