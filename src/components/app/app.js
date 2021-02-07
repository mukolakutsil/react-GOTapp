import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import CharecterPage from '../charecterPage';


export default class App extends Component {

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

        const SteledButton = styled.div`
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
                            <SteledButton>
                                <Button
                                    color="primary"
                                    onClick={this.onButtonRandomChar}
                                >{this.state.randomChar ?
                                    'Hide Random Char Block' :
                                    'Show Random Char Block'}
                                </Button>
                            </SteledButton>

                        </Col>
                    </Row>
                    <CharecterPage />
                </Container>
            </>
        );
    }
};
