import React, { Component} from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import Adminad from './Admin/Adminadd.jsx';
import '../index.css';
import '../style.css';

class Adminadd extends Component {
   
    render() {

        return (
            <div>
                <Header />
                <br />
                <Adminad />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Adminadd

