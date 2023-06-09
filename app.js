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
  const success = allRecipes.length > 0;
  //console.log(success);
  res.send({success, payload: allRecipes});
  });

// Get recipe by ID
app.get("/api/recipes/:id", async (req, res) => {
  const recipeByID = await getRecipeByID(req.params.id);
  const success = recipeByID !== null;
  res.send({ success, payload: recipeByID });
  //console.log(recipeByID);
});

// Create new recipe
app.post("/api/recipes", async (req, res) => {
  const createdRecipe = await createRecipe(req.body); 
  const success = createdRecipe !== null;
  res.send({ success, payload: createdRecipe });
  //console.log(createdRecipe);
});

// Update recipe by ID
app.patch("/api/recipes/:id", async (req, res) => {
const updateRecipe = await updateRecipeByID(req.params.id, req.body);
res.send({ success: true, payload: updateRecipe });
//console.log(updateRecipe);
})

// Delete recipe by id
app.delete("api/recipes/:id", async (req, res) => {
  const deletedRecipe = await deleteRecipeByID(req.params.id);

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
