/**
 * Add new methods to an array
 * @param {Array} array
 */
function improveArray(array) {
   array.randElement = function () {
      let index = Math.floor(Math.random() * this.length);
      return this[index];
   };

   array.clean = function () {
      this.splice(0, this.length);
   };
}

export { improveArray };