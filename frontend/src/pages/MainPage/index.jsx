import React from 'react';
import './styles.css';
import Menu from '../../components/Menu/mainMenu';

import imgsection2 from '../../assets/images/imgsection2.jpeg';
import slide1 from '../../assets/images/anchieta1.jpg';
import slide2 from '../../assets/images/anchieta2.jpg';
import slide3 from '../../assets/images/anchieta3.jpeg';



const MainPage = () => {
    return (
        <>
            <Menu />

            <section className="section-1">
                <hr />
                <div className="box-1">
                    <h1><strong>ECO LAR ANCHIETA</strong></h1>
                    <p className="lead">Projeto desenvolvido pra Ocupação Anchieta, localizada<br />
                     no Grajaú, ocupação que já é resistência a 7 anos.</p>
                     <nav>
                        <button>INSCREVA-SE</button>
                        <button>LOGIN</button>
                     </nav>
                </div>
            </section>
            <section className="section-2">
                {/* <img src={imgsection2} alt=""/> */}
                <div className="box-2">
                    <h1>O QUE VOCÊ SABE SOBRE<br /> OCUPAÇÃO?</h1>
                    <hr />
                    <p className="lead">The number of applicants placed is down 2% on the <br/> 
                    same time last year, but overall there has been a <br /> 
                    steady rise in the numbers going to university over <br /> 
                    the past 10 years - from 375,320 in 2009.</p>
                </div>
                <div className="box-3">
                    <h1>Teste</h1>
                </div>
            </section>
            <div className="section-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={slide1} alt="Primeiro Slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={slide2} alt="Segundo Slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={slide3} alt="Terceiro Slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
            </div>
            </div>
            
        </>

    );
}

export default MainPage;