import React, { Component } from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router';
import createHistory from 'history/createBrowserHistory';



class Bookdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookInfo: [],
            bookName: ''
        }

    }

    componentDidMount() {

        this.getUrl();


    }

    onClick(e) {
        console.log('on click ');
        const history = createHistory();
        //history
        history.push({
            pathname:'/order',
            state:{message:'h'}
        })
       // const location = 
       //history.push(location);
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

        var bookid = this.state.bookInfo;
        /* const Button = withRouter(({ history }) => (
             <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                 history.push({
                     pathname: '/order',
                     state: { bookInfo: bookid }
                 })
             }}>
                 PROCEED TO CHECK-OUT
             </button>
         ))
 */

        return (
            <div className="jumbotron">
                <div className="page-header">
                    <h1>Search Result for<small> {bookid.name} </small></h1>
                </div>
                <div className="panel panel-default">

                    <div className="panel-body">
                        <div className="container">
                            <section className="social social-1 near-footer">

                                <div> <h1>Name: {bookid.name}</h1></div>
                                <div> <h1>description: {bookid.description}</h1></div>
                                <div> <h1>Language: {bookid.language} </h1></div>
                                <div> <h1>Price: {bookid.price}</h1></div>
                                <div> <h1>publicationdate: {bookid.publicationdate}</h1></div>
                                <br />
                                <button onClick={this.onClick} > Proceed to Pay-out </button>
                            </section>
                        </div>
                    </div>
                </div>


            </div >
        )
    }

}
export default Bookdetails
