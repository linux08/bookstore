import React, { Component } from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import OrderDetails from './Home/Book/Order.jsx';
import '../index.css';

class Order extends Component {
   
    render() {

        return (
            <div>
                <Header />
                <br />
                <OrderDetails {...this.props.location.state}/>
                <br />
                <Footer />
            </div>
        )
    }

}

export default Order

