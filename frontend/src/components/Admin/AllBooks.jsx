import React, { Component } from 'react';
import axios from 'axios';

class allBooks extends Component {

    deleteBook(e) {
        let bookName = this.state.name;
        let permission = this.state.permission;

        axios.post('http://localhost:1337/admin/delete', {
            name: this.state.name,
        })
            .then((response) => {
                console.log(response);
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
    listBook(e) {
        axios.get('http://localhost:1337/book/list', {

        })
    }

    render() {
        return (
            <div>
                <div className="col-lg-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Books Panel</h3>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Order Date</th>
                                            <th>Order Time</th>
                                            <th>Amount (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>3326</td>
                                            <td>10/21/2013</td>
                                            <td>3:29 PM</td>
                                            <td>$321.33</td>
                                        </tr>
                                        <tr>
                                            <td>3325</td>
                                            <td>10/21/2013</td>
                                            <td>3:20 PM</td>
                                            <td>$234.34</td>
                                        </tr>
                                        <tr>
                                            <td>3324</td>
                                            <td>10/21/2013</td>
                                            <td>3:03 PM</td>
                                            <td>$724.17</td>
                                        </tr>

                                        <tr>
                                            <td>3320</td>
                                            <td>10/21/2013</td>
                                            <td>2:15 PM</td>
                                            <td>$5663.54</td>
                                        </tr>
                                        <tr>
                                            <td>3319</td>
                                            <td>10/21/2013</td>
                                            <td>2:13 PM</td>
                                            <td>$943.45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default allBooks;