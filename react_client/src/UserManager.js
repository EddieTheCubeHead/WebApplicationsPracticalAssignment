import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from "./redux/actions";
import { logIn, createUser, fetchAll } from "./redux/asyncFunctions";

// Class for the user management panel on top of the feed
class UserManager extends Component {
	
	constructor(props) {
		super(props);
		this.state = {userName: "", passWord: "", create: false};
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	// Handling input from two fields with one function
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	
	// Handling form submission from two buttons with one function
	handleSubmit(event) {
		event.preventDefault();
		
		// Create user changes state.create to true
		if (this.state.create) {
			this.props.dispatch(createUser(this.state.userName, this.state.passWord));
		} else {
			this.props.dispatch(logIn(this.state.userName, this.state.passWord));
		}
		this.setState({userName: "", passWord: "", create: false});
		this.props.dispatch(fetchAll);
	}
	
	createUser() {
		this.setState({create: true});
	}
	
	render () {
		// Conditional rendering based on whether user is logged in
		const userManagement = this.props.user ?
			<button onClick = { () => this.props.dispatch(logOut())}>Log out</button> :
			<form onSubmit={this.handleSubmit}>
				<label>
					Username:
					<input type="text" value={this.state.userName} onChange={this.handleInputChange} name="userName" />
				</label>
				<br/>
				<label>
					Password:
					<input type="password" value={this.state.passWord} onChange={this.handleInputChange} name="passWord" />
				</label>
				<br/>
				<input type="submit" value="Login" />
				<button onClick = { () => this.createUser() }>Create user</button>
			</form>
			
		return (
			<div id="userManagement">
				{userManagement}
			</div>
		)
	}		
}


export default connect(null)(UserManager);