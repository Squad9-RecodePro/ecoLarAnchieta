import React from 'react';

import Menu from '../components/Menu/mainMenu';

const Page404 = () => {
    return (
        <>
            <Menu />
            <div className="justify-content-center">
                <h1 className="text-danger d-flex justify-content-center">Desculpe, página não encontrada!</h1>
                <a className="d-flex justify-content-center" href="/">Clique aqui para voltar para a pagina inicial</a>
            </div>
        </>
    )
}

export default Page404;
