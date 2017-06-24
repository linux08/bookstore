import React, { Component } from 'react';
import './login.css';
import axios from 'axios';

import Auth from '../Auth/Auth.js';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {

			email: '',
			password: ''

		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleChange(e) {
		e.target.classList.add('active');

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('http://localhost:1337/login', {

			email: this.state.email,
			password: this.state.password


		})
			.then(function (response) {
			console.log(response.data.token);
				
				Auth.authenticateUser(response.data.token);				
				//Auth.authenticateUser(response.token);
				window.location.replace("/");

			})
			.catch(function (error) {
				console.log(error);
			});
		console.log('component state', JSON.stringify(this.state));

	}
	//window.location.replace("/");

	render() {

		return (
			<div className="container">
				<div className="col-xs-12 ">
					<h2 style={{ display: 'flex', justifyContent: 'center' }} >Please sign in</h2>
					<form className="form-signin" onSubmit={this.handleSubmit}>

						<label id="emailLabel" className="sr-only">Email address</label>
						<input type="email" id="email" className="form-control" placeholder="Email address"
							name="email"
							ref="email"
							value={this.state.email}
							onChange={this.handleChange}
							required

						/>
						<label htmlFor="password" className="sr-only">Password</label>
						<input type="password" id="password" className="form-control" placeholder="Password"
							name="password"
							ref="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<div className="checkbox">
							<span><label style={{ wordSpacing: '2px' }}>
								<input type="checkbox" value="remember-me" /> Remember me
								</label> </span>
							<span><a href="/signup" >Sign Up Here</a> </span>
						</div>
						<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					</form>
				</div>
			</div>


		)
	}

}
export default LoginForm

