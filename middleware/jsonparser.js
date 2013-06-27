
/**
 * export `jsonParser`
 */

module.exports = function jsonParser () {
	return function (data, next) {
		next(JSON.parse(data));
	}
};