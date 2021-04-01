import React from 'react';
import { Container, Row, Col, Card, CardDeck, } from 'react-bootstrap';

import Menu from '../../components/Menu/mainMenu';
import DivImage from '../../components/DivImage';
import RoundedButton from '../../components/RoundedButton';
import ControlledCarousel from '../../components/ControlledCarousel';
import AvatarList from '../../components/Avatar';
import Footer from '../../components/Footer';
import './styles.css';
import initAnimacaoScroll from '../../js/eventScroll.js'

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


window.onload = initAnimacaoScroll;

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
        <div style={{ overflowX: "hidden" }}>
            <Menu page1={"#sobre"} title1={"Sobre"} page2={"#o-projeto"} title2={"O Projeto"} 
            page3={"#a-comunidade"} title3={"A Comunidade"} page4={"#proposito"} title4={"Sobre Nós"}
            page5={"#desenvolvedores"} title5={"Desenvolvedores"} home={"/"}
            />
            <DivImage image={image1}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} md={10} sm={8} >
                            <Row>
                                <Titulo>ECO LAR ANCHIETA</Titulo>
                            </Row>
                            <Row>
                                <p className="lead">Projeto desenvolvido para os moradores da Ocupação Anchieta, localizada no bairro do Grajaú São Paulo, ocupação que já é resistência a sete anos.</p>
                            </Row>
                            <Row className="justify-content-center p-0">
                                <Col lg="3">
                                    <RoundedButton size="lg" href="/RegisterUser"><span>Inscreva-se</span></RoundedButton>
                                </Col>
                                <Col lg="3">
                                    <RoundedButton size="lg" href="/UserLogin"><span>Login</span></RoundedButton>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </DivImage>
            <section id="sobre" className="js-scroll">
                <Row className="p-5 d-flex justify-content-center" fluid>
                    <Row>
                        <Container fluid className="p-1 text-dark">
                            <h3>SOBRE A OCUPAÇÃO ANCHIETA</h3>
                            <div className="dropdown-divider"></div>
                            <p className="lead">
                                A ocupação Anchieta, fica na região do Grajau, Zona Sul de São Paulo e abriga mais 1.100 famílias. <br></br>
                                Os lotes ficam em um terreno particular e a negociação com o Instituto Anchieta do Grajaú, proprietário da área, incluem um projeto de urbanização.
                                Uma nascente que fica na área já foi isolada, as ruas têm nome e a Sabesp e a Enel já iniciaram estudos para colocar redes de água, esgoto e energia elétrica. <br></br>
                                A população já é assistida por escolas e postos de saúde do entorno.
                                <br></br>
                                “Somos um bairro”, diz moradora.
                            </p>
                        </Container>
                    </Row>
                    <Row className="p-5 d-flex justify-content-center" fluid>
                        <Container className="p-5 d-flex justify-content-center" fluid >
                            <blockquote className="blockquote text-right">
                                <ControlledCarousel images={imagensCarrousel} />
                                <footer class="blockquote-footer text-dark">Ocupação Anchieta , Grajaú - São Paulo</footer>
                            </blockquote>
                        </Container>
                    </Row>
                </Row>
            </section>
            <section id="o-projeto" className="js-scroll">
                <Row style={{ backgroundColor: '#0B305E' }} fluid>
                    <Container className="p-5">
                        <CardDeck>
                            <Card className="shadow p-3 mb-5 rounded text-light" style={{ backgroundColor: '#0B305E' }}>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Quem somos</Card.Title>
                                    <Card.Text>
                                        O Eco Lar Anchieta, é um projeto social do curso Full Stack da ONG RECODE PRO. <br></br>
                                         Fundado em 2020 por jovens estudantes que moram em várias localidades de São Paulo <br></br> 
                                         (Edson Oliveira, Elnatan Souza, Frederico Reid, Gustavo Cavalcante, Tainá Ferreira e Thamirez Bastos).
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow p-3 mb-5 rounded text-light" style={{ backgroundColor: '#0B305E' }}>
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title>O projeto</Card.Title>
                                    <Card.Text>
                                        Essa é uma plataforma para cadastrar os moradores, uma plataforma interna, <br></br> 
                                        que seja possível emitir comunicados e possíveis mutirões para ajudar uns aos outros, promovendo ainda mais a união da comunidade, entre outras facilidades.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Container>
                </Row>
            </section>
            <section id="a-comunidade" className="js-scroll">
                <Container className="p-5">
                    <Row className="d-flex justify-content-center">
                        <iframe title="video" width="640" height="360" frameBorder="0"
                            src="https://www.youtube.com/embed/wSJt3k06nS8">
                        </iframe>
                    </Row>
                    <Row className="p-3 d-flex justify-content-center text-center text-light">
                        <h2 class="lead">“Enquanto o governo maior se organiza lá em cima, nós não temos que nos dar por mortos. A gente tem que se organizar”.
                            Anderson Pé, vice-presidente da Associação de Moradores do Anchieta.</h2>
                    </Row>
                </Container>
            </section>
            <section id="proposito" className="js-scroll">
                <Container>
                    <Row>
                        <Col sm={12} lg={4} >
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={missao} alt= "" width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Missão</h3>
                                <p className="lead">Fazer por meio desse projeto sobre a ocupação Anchieta, garantir o acesso a direitos e ajudar a fazer a diferença de pelo menos uma família.</p>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={visao} alt="" width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Visão</h3>
                                <p className="lead">Almejamos que nossos familiares, amigos e colegas se reconheçam em nosso projeto e se percebam pertencentes, para que assim possamos construir um projeto que traga mais esperança.</p>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Row className="p-3 d-flex justify-content-center">
                                <img src={valores} alt="" width="100"></img>
                            </Row>
                            <Row className="p-3 d-flex justify-content-center text-center">
                                <h3>Valores</h3>
                                <p className="lead">Nossos valores circulam em caminhar ao lado da ocupação Anchieta com representatividade, esperança e empatia. Promover a dignidade,  otimismo, solidariedade e união entre os moradores.</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="desenvolvedores" className="js-scroll" style={{ backgroundColor: 'white' }}>
                <hr />
                <Container className="p-3 justify-content-center">
                    <Row>
                        <Container className="text-center">
                            <h1>Desenvolvedores</h1>
                        </Container>
                        <Container>
                            <AvatarList />
                        </Container>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>

    );
}

export default MainPage;