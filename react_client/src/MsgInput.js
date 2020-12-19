import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMsg, fetchAll } from './redux/asyncFunctions';

// Class for the conditional message input field shown if user is logged in
class MsgInput extends Component {
	constructor(props) {
		super(props);
		this.state = {content: ""};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			content: event.target.value
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		if (this.state.content.trim()) {
			this.props.dispatch(createMsg(this.props.user, this.state.content));
			this.setState({
				content: ""
			});
			this.props.dispatch(fetchAll);
		} else {
			alert("Please input content before sending a message!");
		}
	}
	
	render () {	
		return (
			<div id="msgInput">
				<form onSubmit={this.handleSubmit}>
				<label>
					Add a message:
					<textarea value={this.state.content} onChange={this.handleChange} name="content" rows = {3} cols = {70} maxLength={200}/>
				</label>
				<br/>
				<input type="submit" value="Send message" />
			</form>
			</div>
		)
	}		
}

export default connect(null)(MsgInput);