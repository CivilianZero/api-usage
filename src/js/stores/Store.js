var EventEmitter = require('eventemitter3'),
	$ = require('jquery');

var store = Object.create(EventEmitter.prototype);
EventEmitter.call(store);

var items = [],
	url = 'http://swapi.co/api/people';

store.getItems = function() {
	return items;
};

store.fetchItems = function() {
	$.ajax({
		url: url,
		success: function(response) {
			items = items.concat(response.results);
			url = response.next;
			store.emit('update');
		}
	});
	return items;
};

module.exports = store;