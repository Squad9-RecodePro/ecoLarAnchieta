import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';

const RoundedButton = ({ href, size ,children }) => {
    const Btn = styled(Button)`
    background-color: rgba(89, 254, 155, 0.7); 
    border: none;
    `;
    return (
        <Btn href={href} size={size}>
            {children}
        </Btn>
    )
}

export default RoundedButton

