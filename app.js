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
  // const success = allRecipes.length > 0
  // if success = true, then :

  res.send({success: true, payload: allRecipes});

  // if success = false, then: 
  // send error message

}
)

// Getting a specific recipe by ID
// The req.params property is an object that contains the properties which are mapped to the named route "parameters". For example, if you have a route as /api/:name, then the "name" property is available as req.params.name. The default value of this object is {}.
app.get("/api/recipes/:id", async (req, res) => {
  const recipeByID = await getRecipeByID(req.params.id);
  res.send({ success: true, payload: recipeByID });
  console.log(recipeByID);
});



app.post("/api/recipes", async (req, res) => {
  // console.log(req.body);
  const createdRecipe = await createRecipe(req.body); // created recipe object
  res.send({ success: true, payload: createdRecipe });
  // console.log(createdRecipe);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
