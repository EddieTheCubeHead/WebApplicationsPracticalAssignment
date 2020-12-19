import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserManager from "./UserManager";
import Msg from "./Msg";
import MsgInput from "./MsgInput";
import FeedControlPanel from "./FeedControlPanel";

// A class representing the whole application, with focus on the message feed
class Feed extends Component {
		
	render() {
		
		const userManagement = <UserManager user = {this.props.user}/>

		// Only allow posting messages if user is logged in
		const msgInput = this.props.user ? <MsgInput user = {this.props.user}/> : null
		
		// Constructing the feed based on the filter string
		const msgFeed = this.props.msgs.map((msg) => {
			// Empty filter string -> show all messages
			const matchesSearch = this.props.search ? msg.owner.toLowerCase().includes(this.props.search.trim().toLowerCase()) : true;
			if (matchesSearch) {
				return <Msg key ={msg.id.toString() + ":" + this.props.user}
				 owner = {msg.owner} 
				 content = {msg.content} 
				 canDelete = {msg.owner === this.props.user} 
				 id = {msg.id}/>
			} else {
				return null;
			}
		});
		
		return (
			<div>
				<h1 id="twatter">Twatter</h1>
				<p id="loginStatus"> {this.props.user ? "Logged in as " + this.props.user : "Please login to post a status."} </p>
				{userManagement}
				{msgInput}
				<FeedControlPanel />
				<ul id="feed"> {msgFeed} </ul>
			</div>
		)
	};
}

const mapStateToProps = state => {
	return { user: state.userReducer.user, msgs: state.msgReducer.msgs, search: state.msgReducer.searchString };
}

export default connect(mapStateToProps)(Feed);