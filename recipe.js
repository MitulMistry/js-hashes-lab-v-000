'use strict';

function addIngredient(recipe_object, ingredient, amount) {
  recipe_object[ingredient] = amount;
  return recipe_object;
}

function removeIngredient(recipe_object, ingredient) {
  delete recipe_object[ingredient];
  return recipe_object;
}

function updateIngredient(recipe_object, ingredient, amount) {
  recipe_object[ingredient] = amount;
  return recipe_object;
}

function readRecipe(recipe_object) {
  for (var key in recipe_object) {
    console.log("this recipe calls for " + recipe_object[key] + " of " + key);
  }
}