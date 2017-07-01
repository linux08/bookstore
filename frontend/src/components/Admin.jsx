import React, { Component} from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import AllBooks from './Admin/AllBooks.jsx';
import AllUsers from './Admin/AllUsers.jsx';
import Adminstat from './Admin/Adminstat.jsx';
import '../index.css';
import '../style.css';

class Book extends Component {
   
    render() {

        return (
            <div>
                <Header />
                <br />
                <Adminstat />
                <AllUsers />
                <AllBooks />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Book

