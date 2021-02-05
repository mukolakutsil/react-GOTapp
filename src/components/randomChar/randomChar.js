import React, { Component } from 'react';
import styled from 'styled-components';

export default class RandomChar extends Component {

    render() {

        const RandomBlock = styled.div`
          background-color: #fff;
          padding: 25px 25px 15px 25px;
          margin-bottom: 40px;
          border-radius: 5px;
        `;

        const RandomBlockH4 = styled.h4`
         margin-bottom: 20px;
         text-align: center;
        `;

        const RadnomBlockTerm = styled.span`
         font-weight: bold;
        `;

        return (
            <RandomBlock>
                <RandomBlockH4>Random Character: John</RandomBlockH4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <RadnomBlockTerm>Gender </RadnomBlockTerm>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RadnomBlockTerm>Born </RadnomBlockTerm>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RadnomBlockTerm>Died </RadnomBlockTerm>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RadnomBlockTerm>Culture </RadnomBlockTerm>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
