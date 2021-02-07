import React, { Component } from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner/spinner';

export default class RandomChar extends Component {

    gotService = new GotService();
    state = {
        char: {},
        loading: true
    };

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    };



    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25); // 25 - 140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }


    render() {

        const RandomBlock = styled.div`
          background-color: #fff;
          padding: 25px 25px 15px 25px;
          margin-bottom: 40px;
          border-radius: 5px;
          h4{
            margin-bottom: 20px;
            text-align: center;
          }
          span{
            font-weight: bold;
          }
        `;


        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;


        return (
            <RandomBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span>Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}