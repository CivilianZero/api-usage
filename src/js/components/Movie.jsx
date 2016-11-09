var React = require('react');

var detailsStore = require('../stores/DetailsStore');

var Movie = React.createClass({

    getInitialState: function () {
        return {
            movie: detailsStore.fetchDetails(this.props.url)
        };
    },

    componentWillMount: function () {
        detailsStore.on('update', this.handleStoreUpdate);
    },

    render: function () {
        if (this.state.movie) {
			return <li>{this.state.movie.title}</li>
        } else {
            return <li>Loading...</li>;
        }
    },

    componentWillUnmount: function () {
        detailsStore.off('update', this.handleStoreUpdate);
    },

    handleStoreUpdate: function () {
        this.setState({
            movie: detailsStore.getDetails(this.props.url)
        });
    }

});

module.exports = Movie;