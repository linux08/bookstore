import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';


class Signup extends Component {



	constructor(props) {
		super(props);


		//set the initial state
		this.state = {


			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phone: '',
			address: '',
			order: '',
			permission: 'customer'


		};


		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.processForm = this.processForm.bind(this);
		//this.changeUser = this.changeUser.bind(this);
	}

	handleChange(e) {
		e.target.classList.add('active');

		this.setState({
			[e.target.name]: e.target.value
		});

		this.showInputError(e.target.name);
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('http://localhost:1337/user/create', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			phone: this.state.phone,
			address: this.state.address,
			order: this.state.order,
			permission: this.state.permission

		})
			.then((response)=> {
				console.log(response);
				alert('account succesfully created');
				window.location.replace("/login");

			})
			.catch((error) => {
				console.log(error);
			});
		console.log('component state', JSON.stringify(this.state));

		if (!this.showFormErrors()) {
			console.log('form is invalid: do not submit');
		} else {
			console.log('form is valid: submit');
		}

	}
	showFormErrors() {
		const inputs = document.querySelectorAll('input');
		let isFormValid = true;

		inputs.forEach(input => {
			input.classList.add('active');

			const isInputValid = this.showInputError(input.name);

			if (!isInputValid) {
				isFormValid = false;
			}
		});

		return isFormValid;
	}
	showInputError(refName) {
		const validity = this.refs[refName].validity;
		const label = document.getElementById(`${refName}Label`).textContent;
		const error = document.getElementById(`${refName}Error`);
		const isPassword = refName.indexOf('password') !== -1;



		if (!validity.valid) {
			if (validity.valueMissing) {
				error.textContent = `${label} is a required field`;
			} else if (validity.typeMismatch) {
				error.textContent = `${label} should be a valid email address`;
			} else if (isPassword && validity.patternMismatch) {
				error.textContent = `${label} should be longer than 4 chars`;
			}
			return false;
		}

		error.textContent = '';
		return true;
	}




	render() {
		return (


			<div className="container">
				<div>
					<form className="form-horizontal" onSubmit={this.handleSubmit} >
						<h2 > Kindly Signup</h2>

						<div className="form-group">
							<label className="col-sm-3 control-label" id="firstNameLabel">First Name</label>
							<div className="col-sm-9">
								<input type="text" id="firstName" placeholder="First Name" className="form-control" autoFocus


									name="firstName"
									ref="firstName"
									value={this.state.firstName}
									onChange={this.handleChange}
									required
								/>
								<div className="error" id="firstNameError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="lastNameLabel">Last Name</label>
							<div className="col-sm-9">
								<input type="text" id="lastName" placeholder="Last Name" className="form-control" autoFocus

									name="lastName"
									ref="lastName"
									value={this.state.lastName}
									onChange={this.handleChange}
									required
								/>
								<div className="error" id="lastNameError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="emailLabel">Email</label>
							<div className="col-sm-9">
								<input type="email" id="email" placeholder="Email" className="form-control"

									name="email"
									ref="email"
									value={this.state.email}
									onChange={this.handleChange}
									required

								/>
								<div className="error" id="emailError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="passwordLabel">Password</label>
							<div className="col-sm-9">
								<input type="password" id="password" placeholder="Password" className="form-control"

									name="password"
									ref="password"
									value={this.state.password}
									onChange={this.handleChange}
									required

								/>
								<div className="error" id="passwordError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="phoneLabel">Phone</label>
							<div className="col-sm-9">
								<input type="number" id="phone" placeholder="Phone" className="form-control"
									name="phone"
									ref="phone"
									value={this.state.phone}
									onChange={this.handleChange}
									required


								/>
								<div className="error" id="phoneError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="addressLabel">address</label>
							<div className="col-sm-9">
								<input type="text" id="address" placeholder="address" className="form-control" autoFocus
									name="address"
									ref="address"
									value={this.state.address}
									onChange={this.handleChange}
									required

								/>
								<div className="error" id="addressError" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="orderLabel">order</label>
							<div className="col-sm-9">
								<input type="text" id="order" placeholder="order" className="form-control" autoFocus
									name="order"
									ref="order"
									value={this.state.order}
									onChange={this.handleChange}
									required
								/>
								<div className="error" id="orderError" />

							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label" id="permissionLabel">Permission</label>
							<div className="col-sm-9">
								<select className="form-control" name="permission"
									ref="permission"
									value={this.state.permission} onChange={this.handleChange}>
									<option value="customer">customer</option>
									<option value="author">author</option>
									<option value="admin">admin</option>

								</select>
							</div>
							<div className="error" id="permissionError" />
						</div>
						<div>
							<br />
						</div>
						<div className="form-group">
							<div className="register">

								<button type="submit" className="btn btn-primary" >Register</button>
							</div>
						</div>
					</form>
				</div>
			</div>


		)
	}
}
export default Signup

