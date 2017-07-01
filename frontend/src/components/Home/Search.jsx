import React, { Component } from 'react';
import book from './Book/Bookdetails.jsx';
import bookDetails from './Book/Bookdetails';
import axios from 'axios';
import { Redirect } from 'react-router';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookName: '',
			bookInfo: []
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
	
	onSubmit(e) {
		e.preventDefault();
		let bookname = this.refs.bookName.value.trim();
		if (!bookname) {
			alert('Please enter a Book');
			return;
		}

	}
	//ref="bookName"

	render() {
		return (
			<div className="search">
				<form  method ="get" action ="/book/search">
					<label> Search Book </label>
					<input type="text" id="bookName" className="searchBox" placeholder="Search for Book"

						name="bookName"
						
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
export default Search