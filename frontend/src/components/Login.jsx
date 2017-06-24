import React, { Component } from 'react';
import Header from './Home/Header.jsx';
import Footer from './Home/Footer.jsx';
import LoginForm from './User/LoginForm.jsx';
import '../index.css';


class Login extends Component {

	
/**
 *  render the component
 */
	render() {

		return (
			<div>
				<Header />
				<br />
				<LoginForm 	/>
				<br />
				<Footer />
			</div>
		)
	}

}
export default Login

