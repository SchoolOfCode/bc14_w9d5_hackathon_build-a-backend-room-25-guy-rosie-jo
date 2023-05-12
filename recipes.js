import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    // read the json file
    const recipeJSON = await fs.readFile(fileName, "utf-8");
    // parse the json file
    const recipes = JSON.parse(recipeJSON);
    // return the recipes object
    return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    // read the json file
    const recipeJSON = await fs.readFile(fileName, "utf-8");
    // parse the json
    const recipes = JSON.parse(recipeJSON);
    // for loop
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id === id) {
          let recipe = recipes[i];
          return recipe;
        }
      }
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
    // uuidv4
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
