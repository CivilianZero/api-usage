var React = require('react');

var List = require('./List.jsx');

var App = React.createClass({
	render () {
		return (
			<main>
				<List />
			</main>
		);
	}
});

module.exports = App;