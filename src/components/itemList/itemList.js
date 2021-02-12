import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';

const ItemList = (props) => {


    const renderItems = (arr) => {
        return arr.map(item => {
            const { id } = item;
            const label = props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => props.onItemSelected(id)}
                >
                    {label}
                </li>
            )
        })
    }

    const ItemGroupUl = styled.ul`
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
        `;


    const { data } = props;
    const items = renderItems(data);


    return (
        <ItemGroupUl>
            {items}
        </ItemGroupUl>
    );
}

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        }

        componentDidMount() {
            const { getData } = this.props;
            getData()
                .then(data => {
                    this.setState({
                        data
                    })
                })
        }

        render() {

            const { data } = this.state;

            if (!data) {
                return <Spinner />
            }
            return <View {...this.props} data={data} />

        }
    }
}



export default withData(ItemList);