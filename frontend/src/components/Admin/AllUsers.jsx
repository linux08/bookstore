import React, { Component } from 'react';
import axios from 'axios';

class allUsers extends Component {


    render() {

        var user = this.props.users;
        console.log(user)
        var userComponents = user.map(function (bb) {
            return (
                <div className="container" key={bb.id}>
                   
                    <table className="table" >
                        <tbody className="table table-condensed" >
                            <tr>
                                <td>{bb.firstname}</td>
                                <td>{bb.lastname}</td>
                                <td>{bb.email}</td>
                                <td>{bb.phone}</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            )
        });
        return (
            <div className="container">
                <div className="table" style={{ textAlign: 'center' }}>
                 <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa fa-user-o" aria-hidden="true"></i> User Panel</h3>
                    </div>
                    <table className="table table-condensed " >
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                    </table>

                     {userComponents}  
                </div>
            </div>


        )
    }
}

export default allUsers;