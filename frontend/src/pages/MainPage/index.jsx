import React from 'react';
import {Container, Row, Col, Card, CardDeck, Carousel} from 'react-bootstrap';

import Menu from '../../components/Menu/mainMenu';
import DivImage from '../../components/DivImage';
import RoundedButton from '../../components/RoundedButton';
import ControlledCarousel from '../../components/ControlledCarousel';
import AvatarList from '../../components/Avatar';
import Footer from '../../components/Footer';
import './styles.css';

import Titulo from '../../components/Titulo';

import image1 from '../../assets/images/fred1.jpg';
import image2 from '../../assets/images/fred2.jpg';
import image3 from '../../assets/images/fred3.jpg';
import image4 from '../../assets/images/fred4.jpg';
import image5 from '../../assets/images/fred5.jpg';
import image6 from '../../assets/images/fred6.jpg';

import missao from '../../assets/icons/missao.svg';
import valores from '../../assets/icons/valores.svg';
import visao from '../../assets/icons/visao.svg';


const MainPage = () => {


    const imagensCarrousel = [
        {
            src: image1,
            alt: "...."
        },
        {
            src: image2,
            alt: "...."
        },
        {
            src: image3,
            alt: "...."
        },

        {
            src: image4,
            alt: "...."
        },
        {
            src: image5,
            alt: "...."
        },
        {
            src: image6,
            alt: "...."
        }
    ]

    return (
        <div style={{overflowX: "hidden"}}>
            <Menu />
            <DivImage image={image1}>
                <Container className="p-4">
                    <Row>
                        <Col className="section1" lg={8} md={10} sm={3} >
                            <Row>
                                <Titulo>ECO LAR ANCHIETA</Titulo>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p className="h2" width="640" height="360">Projeto desenvolvido para os moradores Ocupação Anchieta, localizada no Grajaú, ocupação que já é resistência a sete anos.</p>
                            </Row>
                            <Row className="p-0">
                                <Col lg="3" className="justify-content-center">
                                    <RoundedButton size="lg" href="/RegisterUser"><span>Inscreva-se</span></RoundedButton>
                                </Col>
                                <Col lg="2">
                                    <RoundedButton size="lg" href="/UserLogin"><span>Login</span></RoundedButton>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </DivImage>
            <section>
                <Row  className="p-5 d-flex justify-content-center" style={{backgroundColor: '#0B305E'}} fluid>
                    <Row>
                        <Container fluid className="p-1 text-light">
                            <h3>SOBRE A OCUPAÇÃO</h3>
                            <div className="dropdown-divider"></div>
                            <p className="lead">
                            Segundo o vice-presidente da associação de moradores da ocupação Anchieta, 
                            Anderson (Pé), estima-se que há por volta de 1.100 famílias.
                            </p>
                        </Container>
                    </Row>
                    <Row className="p-5 d-flex justify-content-center" fluid>
                        <Container className="p-5 d-flex justify-content-center" fluid >
                            <blockquote className="blockquote text-right">
                            <ControlledCarousel images={imagensCarrousel}/>
                            <footer class="blockquote-footer text-light">Ocupação Anchieta , Grajaú - São Paulo</footer>
                            </blockquote>
                        </Container>
                    </Row>
                </Row>
            </section>
            <section>
                <Row fluid>
                    <Container className="p-5">
                        <CardDeck>
                            <Card className="shadow p-3 mb-5 bg-white rounded">
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Quem somos</Card.Title>
                                    <Card.Text>
                                    Edson Oliveira, Frederico Reid, Elnatan Souza, Gustavo Cavalcante, Taina Ferreira e Thamirez Bastos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow p-3 mb-5 bg-white rounded">
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title>O projeto</Card.Title>
                                    <Card.Text>
                                    O projeto foi desenvolvido durante o curso de full stack eletro como meio de...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Container>
                </Row>
            </section>
            <section style={{backgroundColor: '#0B305E'}}>
                <Container className="p-5">
                    <Row className="d-flex justify-content-center">
                        <iframe width="640" height="360" frameBorder="0"
                            src="https://www.youtube.com/embed/wSJt3k06nS8">
                        </iframe>
                    </Row>
                    <Row className="p-3 d-flex justify-content-center text-center text-light">
                            <h2 class="lead">Depoimentos de moradores da comunidade</h2>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} lg={4} >
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={missao} width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Missão</h3>
                                <p className="lead">Promover o que estiver ao nosso alcance para que aja o direito á uma moradia digna com segurança</p>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={visao} width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Visão</h3>
                                <p className="lead">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={valores} width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Valores</h3>
                                <p className="lead">Promover a dignidade, solidariedade, esperança, otimismo, solidariedade e união entre os moradores.</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{backgroundColor: 'white'}}>
                <hr/>
                <Container className="p-3 justify-content-center">
                    <Row>
                        <Container className="text-center">
                            <h1>Desenvolvedores</h1>
                        </Container>
                        <Container>
                            <AvatarList/>
                        </Container>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </div>

    );
}

export default MainPage;