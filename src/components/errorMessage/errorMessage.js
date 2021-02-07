import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';

const ErrorMessage = (props) => {

    const Img = styled.img`
      width: 100%;
    `;

    return (
        <>
            <Img src={img} alt="error" />
            <span>Something goes wrong(</span>
        </>
    )
}

export default ErrorMessage;