import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

// app.use(express.static("public"));
app.use(express.json());

// Get all recipes
app.get("/api/recipes", async (req, res) => {
  const allRecipes = await getRecipes();
  res.send({payload: allRecipes, success: true});
} 
)

// Getting a specific recipe by ID
app.get("/api/recipes/:id", async (req, res) => {
  const allRecipesID = await getRecipeByID();
  res.send({payload: allRecipesID, success: true});
  console.log(allRecipesID)
} 
)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
