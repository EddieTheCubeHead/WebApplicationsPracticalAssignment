import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from './redux/asyncFunctions';
import { search } from './redux/actions';

// Base class for the small control panel on the top left corner of the feed
// Includes a search field and refresh-button
class FeedControlPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {search: ""};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			search: event.target.value
		});
		this.props.dispatch(fetchAll);
		this.props.dispatch(search(event.target.value));
	}
	
	// Most actions already refresh the feed but sometimes manual refresh is the best
	refreshFeed() {
		this.props.dispatch(fetchAll);
	}
	
	render() {
		return (
			<div>
				<input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
				<button onClick = { () => this.refreshFeed() }>Refresh feed</button>
			</div>
		)
	}
}

export default connect(null)(FeedControlPanel)