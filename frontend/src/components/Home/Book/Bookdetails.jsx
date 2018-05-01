import React, { Component } from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import PaystackButton from 'react-paystack';
import decode from 'jwt-decode';
//import Auth from 'C:/Users/abimbola/Desktop/Javascript/sailsproject/bookstore/frontend/src/components/Auth/Auth.js';
//import Auth from '../component/Auth/Auth.js';



class Bookdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookInfo: [],
            bookName: '',
            key: "pk_test_3def9758f8836be201916b02a597e29e4fe4be53",
            email: "customer@yahoo.com",
            amount: ""
        }

    }

    componentDidMount() {

        this.getUrl();
    }
    callback = (response) => {
       
        const history = createHistory();
        const location = history.location;
        history.push({
            pathname: '/order',
            state: { bookInfo: this.state.bookInfo }
        })

    }
    close = () => {
       
    }
    getReference = () => {
        let text = "Denden";
        let possible = "qwertyuiop";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    getUrl() {


        const bookName = window.location.search.split('=')[1];
        const url = 'http://localhost:1337/book/search/?name=' + bookName;
        return axios.get(url)
            .then((response) => {
                this.setState({
                    bookInfo: response.data,
                    amount: response.data.price,
                    
                });
               
            })
            .catch((error) => {
                
            });

    }
 
    render() {

        var bookid = this.state.bookInfo;

        return (
            <div className="jumbotron">
                <div className="page-header">
                    <h1>Search Result for<small> {bookid.name} </small></h1>
                </div>
                <div className="panel panel-default">

                    
                        <div className="container">
                        <div className="">
                            pics
                        </div>
                            <section className="">
                            <div> <h2>Name: {bookid.name}</h2></div>
                            <div>
                                <ul class="bookInfo">
                                    <li>description: {bookid.description}</li>
                                     <li>Language: {bookid.language} </li>
                                     <li>Price: {bookid.price}</li>
                                     <li>publicationdate: {bookid.publicationdate}</li>
                                </ul>
                            </div>
                                <br />
                                <div>
                                    <p>
                                        <PaystackButton 
                                            text="Make Payment"
                                            className="payButton"
                                            callback={this.callback}
                                            close={this.close}
                                            reference={this.getReference()}
                                            email={this.state.email}
                                            amount={this.state.amount}
                                            paystackkey={this.state.key}
                                        />
                                    </p>
                                </div>



                            </section>
                        </div>
                    
                </div>


            </div >
        )
    }

}
export default Bookdetails
