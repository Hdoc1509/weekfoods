import { improveArray } from "./modules/my-array.js";

/**
 * Array of foods
 * @type {Array<String>}
 */
const foodsToCook = [
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

improveArray(foodsToCook);

/**
 * Array for generated foods
 * @type {Array<String>}
 */
const generatedFoods = [];

improveArray(generatedFoods);

/**
 * Generate an unique food
 */
function generateUniqueFood() {
  let food = foodsToCook.randElement();

  while (generatedFoods.includes(food)) {
    food = foodsToCook.randElement();
  }

  generatedFoods.push(food);
}

document.getElementById("botoncito").addEventListener("click", function () {
  // Generating and adding the food to the corresponding cell
  for (let i = 0; i < 5; i++) {
    generateUniqueFood();
    document.getElementById(`food${i + 1}`).innerText = generatedFoods[i];
  }

  generatedFoods.clean();
});
