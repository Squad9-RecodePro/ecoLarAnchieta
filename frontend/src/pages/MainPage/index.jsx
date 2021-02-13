import React from 'react';
import './styles.css';
import Menu from '../../components/Menu/mainMenu';



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
                <div className="box-2">
                    <h1>O QUE VOCÊ SABE SOBRE<br /> OCUPAÇÃO?</h1>
                    <hr />
                    <p className="lead">The number of applicants placed is down 2% on the <br/> 
                    same time last year, but overall there has been a <br /> 
                    steady rise in the numbers going to university over <br /> 
                    the past 10 years - from 375,320 in 2009.</p>
                </div>
                <div className="box-3">

                </div>
            </section>
            
        </>

    );
}

export default MainPage;