import React, { Component } from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import AllBooks from './Admin/AllBooks.jsx';
import AllUsers from './Admin/AllUsers.jsx';
import Adminstat from './Admin/Adminstat.jsx';
import '../index.css';
import '../style.css';
import axios from 'axios';

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            books: []
        }
    }
  



    listBook() {
        const url = 'http://localhost:1337/book/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ books: response.data });
               
            })
            .catch((error) => {
            
            });

    }



    allUser() {
        const url = 'http://localhost:1337/users/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ users: response.data });
             
            })
            .catch((error) => {
              
            });


    }
    componentDidMount() {
        this.allUser();
        this.listBook();
    }
    render() {

        return (
            <div>
                <Header />
                <br />
                <Adminstat {...this.state} />
                <AllUsers {...this.state} />
                <AllBooks {...this.state} />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Book

