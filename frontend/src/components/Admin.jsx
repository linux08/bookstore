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
    /*    deleteBook(e) {
            let bookName = this.state.name;
            let permission = this.state.permission;
    
            axios.post('http://localhost:1337/admin/delete', {
                name: this.state.name,
            })
                .then((response) => {
                    console.log(response.data);
                    //this.setState={
    
    //                }
                }).catch((error) => {
                    console.log(error);
                }
                )
    
        }
        updateBook(e) {
            let bookName = this.state.name;
            let permission = this.state.permission;
    
            axios.post('http://localhost:1337/admin/update', {
                name: this.state.name,
                description: this.state.description,
                language: this.state.language,
                price: this.state.price,
                //image: req.body.image,
                publicationdate: this.state.publicationdate,
                bookavailability: this.state.bookavailability,
                category: this.state.category
    
            })
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                }
                )
    
        }
        addBook(e) {
            let bookName = this.state.name;
            let permission = this.state.permission;
    
            axios.post('http://localhost:1337/admin/create',
                {
                    name: this.state.name,
                    description: this.state.description,
                    language: this.state.language,
                    price: this.state.price,
                    //image: req.body.image,
                    publicationdate: this.state.publicationdate,
                    bookavailability: this.state.bookavailability,
                    category: this.state.category
    
                })
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                }
    
                )
    
    
        }
        /* profile(e) {
         let bookName = this.state.name;
         let permission = this.state.permission;
 
         axios.post('http://localhost:1337/user/profile', {
             email: this.state.email
         })
             .then((response) => {
                 console.log(response);
             }).catch((error) => {
                 console.log(error);
             }
             )
 
     } */



    listBook() {
        const url = 'http://localhost:1337/book/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ books: response.data });
                console.log("setting  book respose.data");
            })
            .catch((error) => {
                console.log(error);
            });

    }



    allUser() {
        const url = 'http://localhost:1337/users/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ users: response.data });
                console.log("setting  users respose.data");
            })
            .catch((error) => {
                console.log(error);
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

