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
            email: "",
            amount: 1
        }

    }

    componentDidMount() {

        this.getUrl();
    }
    callback = (response) => {
        console.log('testing');
        console.log(response);
        const history = createHistory();
        const location = history.location;
        history.push({
            pathname: '/order',
            state: { bookInfo: this.state.bookInfo }
        })

    }
    close = () => {
        console.log("Payment closed");
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
                    amount: response.data.price
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }/*
    getId() {
        console.log('token status' );

        const token = Auth.getToken();
        console.log('token status' + token);
        const decodedToken = decode(token);
        const userId = decodedToken.id;
        return userId;
    }
    getUserInfo() {

        const id = this.getId();
        let url = 'http://localhost:1337/user/' + id;
        axios.get(url).then((response) => {
            console.log(response.data.email);
            this.setState({
                email: response.data.email
            });

        })
            .catch((err) => {
                console.log(err);

            })
    } */
    render() {

        var bookid = this.state.bookInfo;

        return (
            <div className="jumbotron">
                <div className="page-header">
                    <h1>Search Result for<small> {bookid.name} </small></h1>
                </div>
                <div className="panel panel-default">

                    <div className="panel-body">
                        <div className="container">
                            <section className="">
                                <ul>
                                    <div> <li>Name: {bookid.name}</li></div>
                                    <div> <li>description: {bookid.description}</li></div>
                                    <div> <li>Language: {bookid.language} </li></div>
                                    <div> <li>Price: {bookid.price}</li></div>
                                    <div> <li>publicationdate: {bookid.publicationdate}</li></div>
                                </ul>
                                <br />
                                <div>
                                    <p>
                                        <PaystackButton className="btn btn-primary btn-lg"
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
                </div>


            </div >
        )
    }

}
export default Bookdetails
