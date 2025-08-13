import { useParams } from "react-router-dom";
import jsonData from "../data.json";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setrecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = jsonData.find((item) => item.id === parseInt(id));
    setrecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Recipe Not Found!</p>;

  return (
    <div
      style={{ fontFamily: "Merriwether" }}
      className="p-10 text-lg md:text-2xl"
    >
      <img src={recipe.image} alt="" />
      {/* title */}
      <h1 className="text-3xl font-bold text-amber-600">{recipe.title}</h1>
      {/* ingredients */}
      <p className="text-xl md:text-2xl underline my-2">Ingredients</p>
      <ul className="my-4 list-disc px-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li className=" py-2 my-2 md:py-4" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      {/* instructions */}
      <p className="text-xl  md:text-2xl underline my-2">Instructions</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
