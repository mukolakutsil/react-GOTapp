import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import CharecterPage from '../pages/charecterPage';
import GotService from '../../services/gotService';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage/housesPage';


export default class App extends Component {

    gotService = new GotService();

    state = {
        randomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }


    onButtonRandomChar = () => {
        this.setState({
            randomChar: !this.state.randomChar
        })
    }


    render() {

        const StyledButton = styled.div`
         button{
            margin: 0;
            margin-bottom: 40px;
            margin-left: 150px;
         }
        `

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {this.state.randomChar ? <RandomChar /> : null}
                            <StyledButton>
                                <Button
                                    color="primary"
                                    onClick={this.onButtonRandomChar}
                                >
                                    {this.state.randomChar ?
                                        'Hide Random Char Block' :
                                        'Show Random Char Block'}
                                </Button>
                            </StyledButton>
                        </Col>
                    </Row>
                    <CharecterPage />
                    <BooksPage />
                    <HousesPage />
                </Container>
            </>
        );
    }
};
