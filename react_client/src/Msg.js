import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMsg, fetchAll } from './redux/asyncFunctions';

// A basic message in the feed
class Msg extends Component {
	
	deleteSelf() {
		const id = this.props.id;
		this.props.dispatch(deleteMsg(id));
		this.props.dispatch(fetchAll);
	}
	
	// Render a "Delete message" -button if user is logged in as the message author
	deleteBtn = this.props.canDelete ? <button type="button" id="delete" onClick = { () => this.deleteSelf() }>Delete message</button> : null
	
	render() {
		return (
			<li>
				<h2>{ this.props.owner } </h2>
				<p> { this.props.content } </p>
				{ this.deleteBtn }
			</li>
		)
	}
}

export default connect(null)(Msg);