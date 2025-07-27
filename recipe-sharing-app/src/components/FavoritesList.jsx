// src/components/FavoritesList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

export default function FavoritesList() {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  if (favorites.length === 0) {
    return <p>No favorites yet. </p>;
  }

  return (
    <div>
      <h2> My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
