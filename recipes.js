import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  const data = await fs.readFile(fileName, "utf-8");
  const recipes = JSON.parse(data);
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  const recipes = await getRecipes();
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      let recipe = recipes[i];
      return recipe;
    }
  }
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  const recipes = await getRecipes();
  const recipe = { ...newRecipe, id: uuidv4() };
  recipes.push(recipe);
  await fs.writeFile(fileName, JSON.stringify(recipes), "utf-8");
  return recipe;
}

// UPDATE A RECIPE BY ID (not yet working)
export async function updateRecipeByID(id, updatedRecipe) {
  const recipes = await getRecipes();
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index >= 0) {
    const preUpdate = recipes[index];
    const updated = {
      ...preUpdate,
      ...updatedRecipe,
      id: id,
    };
    recipes[index] = updated;
    await fs.writeFile(fileName, JSON.stringify(recipes), "utf-8");
    return recipes[index];
  }
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const recipes = await getRecipes();
  const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index >= 0) {
      const [removedRecipe] = recipes.splice(index, 1);
      await fs.writeFile(fileName, JSON.stringify(recipes), "utf-8");
      return removedRecipe;
    }
}
