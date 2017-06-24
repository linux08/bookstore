import React, { Component} from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import Search from './Home/Search.jsx';
import Booka from './Home/Book/Bookdetails.jsx';
import '../index.css';
import '../style.css';

class Book extends Component {
   
    render() {

        return (
            <div>
                <Header />
                <br />
                <Search />
                <Booka />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Book

