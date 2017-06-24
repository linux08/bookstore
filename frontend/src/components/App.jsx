import React, { Component } from 'react';
import Book from './Home/Books.jsx';
import Search from './Home/Search.jsx';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import { getBooks } from './Api.js';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookData: []
		}

	}


	getBooksData() {
		getBooks().then((bookData) => {
			this.setState({ bookData });
		});
		console.log(this.state.bookData);
	}
	componentDidMount() {
		this.getBooksData();
	}
	render() {
		return (
			<div>
				<Header />
				<Search />
				<Book {...this.state} />
				<Footer />
			</div>
		)
	}
}


export default App