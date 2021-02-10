import React, { Component } from 'react';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class BooksPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: 10,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={item => item.name} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.gotService.getBook}
            >
                <Field field='name' label='Name' />
                <Field field='authors' label='Authors' />
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='country' label='Country' />
                <Field field='released' label='Released' />
            </ItemDetails>

        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}