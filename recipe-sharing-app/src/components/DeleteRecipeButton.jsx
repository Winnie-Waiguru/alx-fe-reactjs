// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/"); // go back to home after deleting
  };

  return <button onClick={handleDelete}>Delete</button>;
}
