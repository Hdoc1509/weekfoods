/**
 * Array of foods
 * @type {Array<String>}
 */
const foods = [
  "Seco de carne",
  "Cau-cau",
  "Estofado",
  "Ají de pollo",
  "Arroz a la jardinera",
  "Lomo saltado",
  "Chanfainita",
  "Escabeche",
  "Arroz con huevo y locro",
  "Puré / pollo al horno",
  "Pollo al sillao",
  "Carapulcra",
  "Chaufa",
  "Picante de carne",
  "Pollo a la olla",
  "Olluco con carne",
  "Milanesa",
];

const getRandomFood = () => {
  return foods[Math.floor(Math.random() * foods.length)];
};

/**
 * Array for generated foods
 * @type {Array<String>}
 */
const generatedFoods = [];

/**
 * Generate an unique food
 */
function generateUniqueFood() {
  let food = getRandomFood(foods);

  while (generatedFoods.includes(food)) {
    food = getRandomFood(foods);
  }

  generatedFoods.push(food);
}

document.getElementById("botoncito").addEventListener("click", function () {
  // Generating and adding the food to the corresponding cell
  for (let i = 0; i < 5; i++) {
    generateUniqueFood();
    document.getElementById(`food${i + 1}`).innerText = generatedFoods[i];
  }

  // Clean generated foods
  generatedFoods.splice(0, generatedFoods.length);
});
