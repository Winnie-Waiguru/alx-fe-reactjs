import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  // If no search term, show all recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const listToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {listToDisplay.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div>
              <Link to={`/details/${recipe.id}`}>View</Link>
              <Link to={`/edit/${recipe.id}`}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
