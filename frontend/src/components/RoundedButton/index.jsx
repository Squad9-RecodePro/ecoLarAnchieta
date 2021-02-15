import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';

const RoundedButton = ({ href, size ,children }) => {
    const Btn = styled(Button)`
        border-radius: 30px;
    `;
    return (
        <Btn href={href} size={size}>
            {children}
        </Btn>
    )
}

export default RoundedButton

