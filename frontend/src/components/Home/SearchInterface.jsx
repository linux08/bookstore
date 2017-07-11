import React, { Component } from 'react';
import book from './Book/Bookdetails.jsx';
import bookDetails from './Book/Bookdetails';
import axios from 'axios';
import { Redirect } from 'react-router';

class SearchInterface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookName: '',
			bookInfo: []
		}
		

	}
	   getUrl() {

        const bookName = window.location.search.split('=')[1];
        const url = 'http://localhost:1337/book/search/?name=' + bookName;
        return axios.get(url).
            then((response) => {
                this.setState({ bookInfo: response.data });
                console.log(this.state.bookInfo);
            }).
            catch((error) => {
                console.log(error);
            });

    }
	


	render() {
		return (
			<div className="search">
				<Search {...this.state} />
                <SearchResult {...this.state} />
				

			</div>
		)
	}
}
export default SearchInterface