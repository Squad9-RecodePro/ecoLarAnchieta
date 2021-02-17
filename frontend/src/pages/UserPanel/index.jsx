import React from 'react';
import './styles.css';

import Menu from '../../components/Menu/mainMenu';

function UserPanel() {
    const [voluntariado, setVoluntariado] = React.useState([]);
    const baseUrl = "http://localhost:5000";

    React.useEffect(() => {
        async function fetchData() {
            const url = `${baseUrl}/voluntariado`;
            const response = await fetch(url);
            setVoluntariado(await response.json());
        } fetchData();
    });

    return (
        <>
            <Menu page1={"RegisterComplete"} title1={"Complete seu Cadastro"} page2="/UserLogin" title2={"Sair"}></Menu>
            <div className="container" id="container">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Seja Bem-vindo, deseja ser um voluntario?</h5>
                        <p className="card-text">Veja algumas vagas para que você possa colaborar com a sua comunidade:</p>
                    </div>
                </div>

                <div className="container mt-5 mb-5 w-50">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            {voluntariado.map(element => {
                                return (
                                    <div className="card mt-4 shadow-lg">
                                        <div key={element._id} className="card-body">
                                            <p className="card-text">Titulo: {element.title}</p>
                                            <p className="card-text">Descrição: {element.description} </p>
                                            <p className="card-text">N° de vagas: {element.nvagas} </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanel;
