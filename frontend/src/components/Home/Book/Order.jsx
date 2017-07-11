import React, { Component } from 'react';
import axios from 'axios';



class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serverResponse: ''
        }
    }



    render() {
        console.log(this.props);
        return (
            <div className="container">
            </div>
        );
    }
}
export default Order

