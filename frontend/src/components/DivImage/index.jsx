import React from 'react';

import {Row,Container} from 'react-bootstrap';

const DivImage = ({image, children }) => {
    return (
        <Row style={{ backgroundImage: `url(${image})`, height: 449}}>
            <Container>
            {children}
            </Container>
        </Row>

    )
}

export default DivImage
