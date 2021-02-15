//import React from 'react';
//import Menu from '../Menu/mainMenu/index.jsx'
import styled from 'styled-components'


const Image = styled.div`
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${props =>  props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    height: 520px;
    width: 100%;
    padding-top: 50px;

    background-attachment: fixed;
`;



const DivImage = ({image, children }) => {
    return (
        <>
            <Image image={image}>
                {children}
            </Image>
        </>

    )
} 

export default DivImage;