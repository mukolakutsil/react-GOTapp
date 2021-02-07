import React, { Component } from 'react';


export default class GotService extends Component {
    constructor(props) {
        super(props);
        this._apiBase = 'https://anapioficeandfire.com/api';
    }


    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResourse(`/characters?page=5`);
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = () => {
        return this.getResourse('/houses/');
    }

    getHouse = (id) => {
        return this.getResourse(`/houses/${id}/`)
    }

    getBooks = () => {
        return this.getResourse(`/books?page=5`);
    }

    getBook = (id) => {
        return this.getResourse(`/books/${id}`);
    }

    isSet = (data) => {
        if (data) {
            return data;
        } else {
            return 'no data :(';
        }
    }

    _transformCharacter(char) {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        };
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        };
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        };
    }

}