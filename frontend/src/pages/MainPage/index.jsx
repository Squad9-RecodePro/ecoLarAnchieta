import React from 'react';
import {Container, Row, Col, Card, CardDeck, Carousel} from 'react-bootstrap';

import Menu from '../../components/Menu/mainMenu';
import DivImage from '../../components/DivImage';
import RoundedButton from '../../components/RoundedButton';
import ControlledCarousel from '../../components/ControlledCarousel';
import AvatarList from '../../components/Avatar';
import Footer from '../../components/Footer';

import image from '../../assets/images/anchieta1.jpg';
import image2 from '../../assets/images/anchieta2.jpg';
import image3 from '../../assets/images/anchieta3.jpeg';
import image4 from '../../assets/images/anchieta4.jpeg';

import missao from '../../assets/icons/missao.svg';
import valores from '../../assets/icons/valores.svg';
import visao from '../../assets/icons/visao.svg';


const MainPage = () => {


    const imagensCarrousel = [
        {
            src: image4,
            alt: "...."
        },
        {
            src: image3,
            alt: "...."
        },
        {
            src: image2,
            alt: "...."
        },
        {
            src: image,
            alt: "...."
        }
    ]

    return (
        <div style={{overflowX: "hidden"}}>
            <Menu />
            <DivImage image={image}>
                <Container className="p-4">
                    <Row>
                        <Col lg={8} md={10} sm={3}>
                            <Row>
                                <h1 className="h4">ECO LAR ANCHIETA</h1>
                            </Row>
                            <Row>
                                <p className="h2">Projeto desenvolvido pra Ocupação Anchieta, localizada no Grajaú,ocupação que já é resistência a 7 anos.</p>
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
                <Row fluid>
                    <Col style={{backgroundColor: '#0B305E'}}>
                        <Container fluid className="p-5 text-light">
                            <h3>O QUE VOCÊ SABE SOBRE OCUPAÇÃO?</h3>
                            <div className="dropdown-divider"></div>
                            <p className="lead">
                                The number of applicants placed is down 2% on the same time last year, but overall there has been a steady rise in the numbers going to university over the past 10 years - from 375,320 in 2009.
                            </p>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-5 d-flex justify-content-center" fluid >
                            <blockquote className="blockquote text-right">
                            <img src={image2} style={{maxWidth: "100%"}}/>
                            <footer class="blockquote-footer">Ocupação Anchieta , Grajaú - São Paulo</footer>
                            </blockquote>
                        </Container>
                    </Col>
                </Row>
            </section>
            <section>
                <Row fluid>
                    <Container className="p-5">
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Sobre a ocupação</Card.Title>
                                    <Card.Text>
                                    Schools in the National Universities category, such as the University of Chicago and Johns Hopkins University, offer a full range of undergraduate majors, plus master's and doctoral programs. These colleges also are committed to producing groundbreaking research.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title>O projeto</Card.Title>
                                    <Card.Text>
                                    The Curious Case of Benjamin Button ends with Button forgetting all he had achieved throughout his life and him finally blinking out of existence. Is this an appropriate metaphor to describe what has happened to the internationalisation of the curriculum (IoC) agenda in Australia’s higher education sector?
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
                            <h2 class="display-4">Ocupação Anchieta</h2>
                            <p class="lead">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam <br/> nunc justo sagittis suscipit ultrices. asodaksod aoskdasokd aoskdosak</p>
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
            <section className="p-3 d-flex justify-content-center">
                <ControlledCarousel images={imagensCarrousel}/>
            </section>
            <section>
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