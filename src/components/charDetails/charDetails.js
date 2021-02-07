import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner/spinner';
export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return
        }

        this.gotService.getCharacter(charId)
            .then(char => {
                this.setState({
                    char,
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

        if (!this.state.char) {
            return <SpanError className='select-error'> Please select a character </SpanError>
        }

        if (this.state.error) {
            return <ErrorMessage />
        }

        const content = this.state.loading ? <Spinner /> : <View char={this.state.char} />;

        return (
            <DetailsWrapper>
                {content}

            </DetailsWrapper>
        );
    }
}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}