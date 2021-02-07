import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';

const ErrorMessage = (props) => {

    const Img = styled.img`
      width: 100%;
    `;

    const SpanMessage = styled.span`
        color: red;
        font-size: 20px;
    `;

    return (
        <>
            <Img src={img} alt="error" />
            <SpanMessage>Something goes wrong(</SpanMessage>
        </>
    )
}

export default ErrorMessage;