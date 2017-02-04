'use strict';

const logger = require('./logger');
const reader = require('ournet-feed-reader');

reader.logger.set(logger);

exports.handler = function(event, context, callback) {
	console.log(event);
	const feedId = event.feedId;

	reader.read(feedId)
		.then(function() {
			callback();
		})
		.catch(callback);
};

exports.handler({i:1});
