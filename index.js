
/**
 * adds ability to create middleware
 *
 * @api public
 * @param {Object} stream
 */

module.exports = middleshoe;
function middleshoe (stream) {
	var stack = []

	stream.use = function (fn) {
		if ('function' !== typeof fn) throw new TypeError("expecting function");
		else stack.push(fn);
		return this;
	};

	stream.on('data', function (data) {
		var i = 0;
		!function next(d) {
			if (!stack.length) return;
			stack[i++](d || data, next);
		}();
	});

	return stream;
}


/**
 * expose `jsonParser`
 */

middleshoe.jsonParser = require('./middleware/jsonparser');