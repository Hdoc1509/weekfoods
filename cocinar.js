// Array of foods to cook
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

// Array that will contain the generated foods
const generatedFoods = [];

function arrayRandElement(array){
	let index = Math.floor(Math.random() * array.length);
	return array[index];
}

function generateUniqueFood(){
	let food = arrayRandElement(foodsToCook);

	while (generatedFoods.includes(food)) {
		food = arrayRandElement(foodsToCook);
	}

	generatedFoods.push(food);
}

document.getElementById("botoncito").addEventListener("click",function(){
	// Generating and adding the food to the corresponding cell
	for (let i = 0; i < 5; i++) {
		generateUniqueFood();
		document.getElementById(`food${i + 1}`).innerText = generatedFoods[i];
	}

	// Cleaning array generatedFoods
	generatedFoods.splice(0,generatedFoods.length);
});