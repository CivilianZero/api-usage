var React = require('react');

var store = require('../stores/Store.js'),
	Details = require('./Movie.jsx');

var ListItem = React.createClass({

	getInitialState() {
		return {
			detailsVisible: false,
		}
	},

	render() {
		var details;

		if (this.state.detailsVisible) {
			details = this.props.films.map(function (url) {
				return <Details key={url} url={url} />
			});
		}

		return (
			<li onClick={this.handleDetails}>
				<h1>{this.props.name}</h1>
				<ul id='details'>{details}</ul>
			</li>
		);
	},

	handleDetails() {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}
});

module.exports = ListItem;