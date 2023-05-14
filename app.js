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

app.use(express.static("public"));
app.use(express.json());

// Get all recipes
app.get("/api/recipes", async (req, res) => {
  const payload = await getRecipes();
  const success = payload !== undefined;
  if (success) {
    res.json({ success, payload });
  }
  res.status(404).json({ success });
});

// Get recipe by ID
app.get("/api/recipes/:id", async (req, res) => {
  const payload = await getRecipeByID(req.params.id);
  const success = payload !== undefined;
  if (success) {
    res.send({ success, payload });
  }
  res.status(404).json({ success });
});

// Create new recipe
app.post("/api/recipes", async (req, res) => {
  const payload = await createRecipe(req.body);

  const newRecipeBody =
    payload.title &&
    payload.ingredients &&
    payload.instructions &&
    payload.image;
  const success = newRecipeBody !== undefined;
  if (success) {
    res.json({ success, payload });
  }
  res.status(418).json({ success });
});

// Update recipe by ID
app.patch("/api/recipes/:id", async (req, res) => {
  const payload = await updateRecipeByID(req.params.id, req.body);
  res.json({ success: true, payload });
});

// Delete recipe by id
app.delete("/api/recipes/:id", async (req, res) => {
  const payload = await deleteRecipeByID(req.params.id);
  res.json({ success: true, payload });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
