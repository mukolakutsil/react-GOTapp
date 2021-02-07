import React, { Component } from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner/spinner';
export default class ItemList extends Component {

    gotService = new GotService();
    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                })
            })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems = (arr) => {
        return arr.map((item, i) => {
            const { id, name } = item;
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }
    render() {

        const ItemGroupUl = styled.ul`
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
        `;

        if (this.state.error) {
            return <ErrorMessage />
        }

        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderItems(charList);


        return (
            <ItemGroupUl>
                {items}
            </ItemGroupUl>
        );
    }
}