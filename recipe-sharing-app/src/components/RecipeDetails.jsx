// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams(); // get the recipe id from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div>
        <Link to={`/edit/${recipe.id}`}>Edit</Link>

        <DeleteRecipeButton id={recipe.id} />

        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
