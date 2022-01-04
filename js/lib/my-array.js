/**
 * Get a random element from an array
 * @param {Array} array
 * @returns {Number | String | Array | Object}
 */
function arrayRandElement(array) {
	let index = Math.floor(Math.random() * array.length);
	let randElement = array[index]
	return randElement;
}

/**
 * Clean all elements of an array
 * @param {Array} array
 */
function cleanArray(array) {
	array.splice(0, array.length);
}

export { arrayRandElement, cleanArray };