var React = require('react');

var store = require('../stores/Store.js'),
	ListItem = require('./ListItem.jsx');

var List = React.createClass({

	getInitialState() {
		return {
			items: store.fetchItems(),
		}
	},

	componentWillMount() {
		var _this = this;
		store.on('update', function () {
			_this.setState({
				items: store.getItems(),
			});
		});
	},

	render() {
		var listItem = this.state.items.map(function(item) {
			return <ListItem key={item.url} name={item.name} films={item.films} />
		})
		return (
			<main>
				<h1>Personalities of the Galaxy</h1>
				<button onClick={this.handleLoad}>Load More</button>
				<ul>{listItem}</ul>
			</main>
		);
	},

	handleLoad() {
		store.fetchItems();
	}
});

module.exports = List;