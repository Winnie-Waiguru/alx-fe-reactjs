import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // If no search term, show all recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const listToDisplay = searchTerm ? filteredRecipes : recipes;

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

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
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`px-2 py-1 rounded ${
                  favorites.includes(recipe.id)
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-300 text-black"
                }`}
              >
                {favorites.includes(recipe.id) ? "★ Unfavorite" : "☆ Favorite"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
