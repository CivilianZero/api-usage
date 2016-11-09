var EventEmitter = require('eventemitter3'),
	$ = require('jquery');

var detailsStore = Object.create(EventEmitter.prototype);
EventEmitter.call(detailsStore);

var films = {
	// url : {}
};

detailsStore.getDetails = function (url) {
	return films[url] || null;
};

detailsStore.fetchDetails = function (url) {
	$.ajax({
		url: url,
		success: function (response) {
			films[url] = response;
			detailsStore.emit('update');
		}
	});
	return films[url] || null;
}

module.exports = detailsStore;