import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import CharecterPage from '../pages/charecterPage';
import GotService from '../../services/gotService';
import { BooksPage, BooksItem } from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'


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

        const Wrapper = styled.div`
          {
            background: url('../../../public/img/got.jpeg') center center no-repeat;
            background-size: cover;
            height: 1020px;	
          }
        `

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <Wrapper>
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
                        <Route path='/character' component={CharecterPage} />
                        <Route path='/houses' component={HousesPage} />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                return < BooksItem selectedItem={id} />
                            }} />
                    </Container>
                </Wrapper>
            </Router>
        );
    }
};
