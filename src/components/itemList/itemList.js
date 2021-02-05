import React, { Component } from 'react';
import styled from 'styled-components';
export default class ItemList extends Component {

    render() {

        const ItemGroupLi = styled.li`
         cursor: pointer;
        `;

        const ItemGroupUl = styled.ul`
        cursor: pointer;
       `;

        return (
            <ItemGroupUl>
                <ItemGroupLi>
                    John Snow
                </ItemGroupLi>
                <ItemGroupLi>
                    Brandon Stark
                </ItemGroupLi>
                <ItemGroupLi>
                    Geremy
                </ItemGroupLi>
            </ItemGroupUl>
        );
    }
}