import React, { Component } from 'react';
import Auth from '../Auth/Auth';




class Header extends Component {
	
	render() {
		return (
			<div className="header" >
				<nav >
					<div className="container-fluid">
						<a className="navbar-brand" href="/" >DENDEN BOOKSTORE</a>
						{Auth.isUserAuthenticated() ? (
							<div className="head" >
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