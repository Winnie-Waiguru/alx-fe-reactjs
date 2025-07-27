// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const recipe = recipes.find((r) => r.id === Number(id));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: Number(id), title, description });
    navigate(`/details/${id}`); // go back to details page
  };

  if (!recipe) {
    return <p className="text-red-500">Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
      <input
        className="border p-2 mb-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="border p-2 mb-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
      >
        Save
      </button>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-gray-400 text-white px-3 py-1 rounded"
      >
        Cancel
      </button>
    </form>
  );
}
