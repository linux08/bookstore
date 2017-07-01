import React, { Component } from 'react';
import Auth from '../Auth/Auth';
import { getUserInfo } from '../Api.js';
import axios from 'axios';
import decode from 'jwt-decode';


class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {

			email: '',
		}
	}
	componentDidMount() {
		this.getUserInfo();
		
	}
	getId() {
		if(localStorage.getItem('token') == null){
			return null
		}
		const token = Auth.getToken();
		console.log('token status' + token);
		const decodedToken = decode(token);
		const userId = decodedToken.id;
		return userId;
	}
	getUserInfo() {
		if(localStorage.getItem('token') == null){
			console.log('null');
		}
		const id = this.getId();
		let url = 'http://localhost:1337/user/' + id;
		axios.get(url).then((response) => {
			console.log(response.data.email);
			this.setState({
				email: response.data.email
			});

		})
			.catch((err) => {
				console.log(err);

			})
	}
	render() {
		if (localStorage.getItem('token') == null) {
			return (
				<div className="header" >
					<nav >
						<div className="container-fluid">
							<a className="navbar-brand" href="/" >DENDEN BOOKSTORE</a>
							{Auth.isUserAuthenticated() ? (
								<div className="heads" >
									<span> {this.state.email} </span>
									<button type="submit" className="btn btn-danger "><a href="/" onClick={() => Auth.deauthenticateUser()}  > Sign out</a></button>
								</div>) :
								(
									<div className="head" >
										<button type="submit" className="btn btn-info log " ><a href="/login" > Sign in</a></button>
										<button type="submit" className="btn btn-success"><a href="/signup">Sign up</a></button>
									</div>
								)
							}

						</div>
					</nav>
				</div>
			)
		}
		return (
			<div className="header" >
				<nav >
					<div className="container-fluid">
						<a className="navbar-brand" href="/" >DENDEN BOOKSTORE</a>
						{Auth.isUserAuthenticated() ? (
							<div className="heads" >
								<span> {this.state.email} </span>
								<button type="submit" className="btn btn-danger "><a href="/" onClick={() => Auth.deauthenticateUser()}  > Sign out</a></button>
							</div>) :
							(
								<div className="head" >
									<button type="submit" className="btn btn-info log " ><a href="/login" > Sign in</a></button>
									<button type="submit" className="btn btn-success"><a href="/signup">Sign up</a></button>
								</div>
							)
						}

					</div>
				</nav>
			</div>

		)
	}

}
export default Header