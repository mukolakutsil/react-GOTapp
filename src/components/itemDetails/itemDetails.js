import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner/spinner';


const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}

export { Field };


export default class ItemDetails extends Component {


    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateItem = () => {
        const { itemId } = this.props;
        if (!itemId) {
            return
        }

        const { getData } = this.props;

        getData(itemId)
            .then(item => {
                this.setState({
                    item,
                    loading: false
                })
            })

    }

    render() {
        const DetailsWrapper = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        border-radius: 5px;

        h4{
            margin-bottom: 20px;
            text-align: center;
        }
        `;

        const SpanError = styled.span`        
        color: white;
        font-size: 25px;
        padding: 10px;
        border-radius: 5px;
        `;

        if (!this.state.item) {
            return <SpanError> Please select a character </SpanError>
        }

        if (this.state.error) {
            return <ErrorMessage />
        }

        if (this.state.loading) {
            return <Spinner />

        } else if (!this.state.loading) {
            const { item } = this.state;
            const { name } = item;
            return (
                <DetailsWrapper>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>

                </DetailsWrapper>
            )
        }



    }
}

