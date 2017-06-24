import React, { Component } from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import SignupForm from './User/Signup.jsx';
import '../index.css';

class Signup extends Component {
   
    render() {

        return (
            <div>
                <Header />
                <br />
                <SignupForm />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Signup

