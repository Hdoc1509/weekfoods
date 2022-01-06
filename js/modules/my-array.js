/**
 * Add new methods to an array
 * @param {Array} array
 */
function improveArray(array) {
   if (Array.isArray(array)) {
      array.randElement = function () {
         let index = Math.floor(Math.random() * this.length);
         return this[index];
      };

      array.clean = function () {
         this.splice(0, this.length);
      };

      array.removeElement = function (element) {
         let elementPosition = this.indexOf(element);
         this.splice(elementPosition, 1);
      };
   } else {
      console.error("Uncaught TypeError: 'improveArray' function only allows arrays as parameter");
   }
}

export { improveArray };