import React from 'react';
import './styles.css';
import Menu from '../../components/Menu/mainMenu';

function AdminPanel() {
    const [moradores, setMoradores] = React.useState([]);
    const baseUrl = "http://localhost:5000";

    React.useEffect(() => {
        async function fetchData() {
            const url = `${baseUrl}/auth/moradores`;
            const response = await fetch(url);
            setMoradores(await response.json());
        } fetchData();
    });

    const qtdMoradores = moradores.length;

    return (
        <>
            <Menu page1={"ResidentsAdmin"} title1={"Moradores"} page2={"VolunteerWorks"} title2={"Trabalhos Voluntarios"} page3={"AdminLogin"} title3={"Sair"} home={"AdminPanel"}>

            </Menu>

            <div className="container" id="container">
                <div className="row justify-content-center">
                    <div className="card col-lg-5 text-center border shadow">
                        <h3>Total de Familias na Ocupação</h3>
                        <h1>1100</h1>
                    </div>

                    <div className="card col-lg-5 text-center border shadow">
                        <h3>Moradores cadastrados</h3>
                        <h1>{qtdMoradores}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;
