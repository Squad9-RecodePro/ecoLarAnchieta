import React from 'react';
import Menu from '../Menu/mainMenu/index.jsx'

import {Row,Container} from 'react-bootstrap';

const DivImage = ({image, children }) => {
    return (
        <>
            <Menu />
            <Row style={{ backgroundImage: `url(${image})`, height: 449}}>
                <Container>
                {children}
                </Container>
            </Row>
        </>

    )
} 

export default DivImage
