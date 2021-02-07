import React, { Component } from 'react';
import styled from 'styled-components';
export default class ItemList extends Component {

    render() {

        const ItemGroupLi = styled.li`
         cursor: pointer;
         padding: 20px;
         border-bottom: 1px solid rgb(169, 169, 169);
         list-style: none;
        `;

        const ItemGroupUl = styled.ul`
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
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