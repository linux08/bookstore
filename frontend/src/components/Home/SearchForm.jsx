import React, { Component } from 'react';
import book from './Book/Bookdetails.jsx';
import bookDetails from './Book/Bookdetails';
import axios from 'axios';




class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            bookInfo: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        e.target.classList.add('active');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getUrl() {
        let url = 'http://localhost:1337/book/search/?name=' + this.state.bookName;
        return axios.get(url).then(response => response.data);

    }
    getBookData() {
        this.getUrl().then((bookInfo) => {
            this.setState({
                bookInfo
            });

        });
        console.log('i am here');
        console.log(this.state);
    }
    onSubmit(e) {
        e.preventDefault();
        let bookname = this.refs.bookName.value.trim();
        if (!bookname) {
            alert('Please enter a Book');
            return;
        }

        this.getBookData();

        window.location.replace("/book/search");

    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <label> Search Book </label>
                    <input type="text" id="bookName" className="form-control"

                        name="bookName"
                        ref="bookName"
                        value={this.state.bookName}
                        onChange={this.handleChange}
                        required

                    />
                    <button> Search </button>
                </form>
                <hr />
            </div>
        )
    }



}
export default SearchForm