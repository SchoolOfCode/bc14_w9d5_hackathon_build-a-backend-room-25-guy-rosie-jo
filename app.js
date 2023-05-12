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

// all recipes
app.get("/api/recipes", (res, req) => {
  if (req.query.success === "true") {
  res.json({})
  res.send(getRecipes());
} }
)








app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
