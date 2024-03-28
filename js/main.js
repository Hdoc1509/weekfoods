//@ts-check

import { improveArray } from "./modules/my-array.js";

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
  "Alverjita verde",
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
