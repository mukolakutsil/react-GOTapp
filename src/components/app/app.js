import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';


export default class App extends Component {

    state = {
        randomChar: true
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
