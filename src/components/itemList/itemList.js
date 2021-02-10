import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner/spinner';
export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
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

        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);


        return (
            <ItemGroupUl>
                {items}
            </ItemGroupUl>
        );
    }
}