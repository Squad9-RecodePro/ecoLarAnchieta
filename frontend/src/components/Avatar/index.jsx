import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import linkedIn from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';

/*Import de todas as fotos*/
import edson from '../../assets/images/avatares/edson.jpeg'
import elnatan from '../../assets/images/avatares/elnatan.jpeg'
import frederico from '../../assets/images/avatares/frederico.jpeg'
import gustavo from '../../assets/images/avatares/gustavo.jpeg'
import taina from '../../assets/images/avatares/taina.jpeg'
import thamirez from '../../assets/images/avatares/thamirez.jpeg'



const Avatar = ({ data }) => {
    return (
        <Container>
            <Row>
                <Image src={data.image} roundedCircle width="200" className="mx-auto d-block" />
            </Row>
            <Row className="p-3 mx-auto d-block text-center" >
                <h3 className="text-#0B305E">{data.nome}</h3>
            </Row>
            <Row>
                <Col className="p-3">
                    <a href={data.github} target="_blank"><Image src={github} roundedCircle width="30" className="float-right" /></a>
                </Col>
                <Col className="p-3">
                    <a href={data.linkedIn} target="_blank"><Image src={linkedIn} roundedCircle width="30" className="float-left" /></a>
                </Col>
            </Row>
        </Container>
    )
}

const AvatarList = () => {
    const data = [
        {
            image: edson,
            nome: "Edson Oliveira", 
            github: "https://github.com/EdsonOliveiraSilva", 
            linkedIn: "https://www.linkedin.com/in/edson-oliver/"
        },

        {
            image: elnatan,
            nome: "Elnatan Souza", 
            github: "https://github.com/ElnatanSouza", 
            linkedIn: "https://www.linkedin.com/in/elnatan-souza-5ba191193/"
        },

        {
            image: frederico,
            nome: "Frederico Reid", 
            github: "https://github.com/FredericoReid", 
            linkedIn: "https://www.linkedin.com/in/frederico-reid-649601180/"
        },

        {
            image: gustavo,
            nome: "Gustavo Cavalcante", 
            github: "https://github.com/GustavoCavalcant", 
            linkedIn: "https://www.linkedin.com/in/gustavocavalcant/"
        },

        {
            image: taina,
            nome: "Tainá Ferreira", 
            github: "https://github.com/Taina-Ferreira", 
            linkedIn: "https://www.linkedin.com/in/tainafrodrigues/"
        },

        {
            image: thamirez,
            nome: "Thamirez Bastos", 
            github: "https://github.com/ThamirezBastos", 
            linkedIn: "https://www.linkedin.com/in/thamirez-bastos-siqueira-b45698161/"
        }
        
    ]

    return (
        <Container>
            <Row>
                { data.map((people, key) => 
                    <Col key={key} lg={4} sm={6}>
                        <Avatar data={people} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default AvatarList;