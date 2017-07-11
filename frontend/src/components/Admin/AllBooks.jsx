import React, { Component } from 'react';
import axios from 'axios';

class allBooks extends Component {





    render() {
        var book = this.props.books;
        console.log(book)
        var bookComponents = book.map(function (bb) {
            return (

                <div className="container" key={bb.id}>

                    <table className="table" >
                        <tbody className="table table-condensed" >
                            <tr>
                                <td>{bb.name}</td>
                                <td>{bb.language}</td>
                                <td>{bb.price}</td>
                                <td > <button className="btn btn-success">Edit </button> </td>
                                <td > <button className="btn btn-danger"> Delete</button> </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            )
        });
        return (
            <div className="panel panel-default">
                <div className="table" style={{ textAlign: 'center' }}>
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa fa-book" aria-hidden="true"></i> Book Panel</h3>

                        <table className="table " >
                            <thead>
                                <tr >
                                    <th style={{ textAlign: 'center' }}>Name</th>
                                    <th style={{ textAlign: 'center'}}>Language</th>
                                    <th >price</th>

                                </tr>
                            </thead>

                        </table>
                        {bookComponents}
                    </div>
                    <div> <button className="btn btn-info log" style={{ marginLeft: 20 }}> Add Book <i className="fa fa-plus" aria-hidden="true"></i> </button> </div>
                </div>
            </div>
        )
    }
}
export default allBooks;