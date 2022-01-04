//@ts-check

/**
 * Array of foods
 * @type {Array<String>}
 */
const foodsToCook = [
	"Escabeche de pollo",
	"Pollo al sillao",
	"Estofado de pollo",
	"Ají de pollo",
	"Lomo saltado",
	"Carapulcra",
	"Puré de papas",
	"Arroz con pollo",
	"Seco de carne",
	"Arroz a la jardinera",
	"Cau-cau",
	"Arroz con lentejas",
	"Tallarín verde",
	"Tallarín rojo",
	"Macarrones",
	"Olluco con carne",
	"Picante de carne",
	"Arroz chaufa",
	"Bistek con papa sancochada",
	"Pollo a la olla",
	"Pollo broaster",
	"Pollo al horno",
	"Causa",
	"Chanfainita",
	"Arroz con huevo",
	"Papa a la huancaína",
	"Ensalada rusa con milanesa",
	"Arroz con atún",
	"Alverjita verde"
];

/** 
 * Array for generated foods
 * @type {Array<String>}
 */
const generatedFoods = [];

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

/**
 * Generate an unique food
 */
function generateUniqueFood() {
	let food = arrayRandElement(foodsToCook);

	while (generatedFoods.includes(food)) {
		food = arrayRandElement(foodsToCook);
	}

	generatedFoods.push(food);
}

document.getElementById("botoncito").addEventListener("click",function() {
	// Generating and adding the food to the corresponding cell
	for (let i = 0; i < 5; i++) {
		generateUniqueFood();
		document.getElementById(`food${i + 1}`).innerText = generatedFoods[i];
	}

	cleanArray(generatedFoods);
});