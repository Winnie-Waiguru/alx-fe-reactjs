import { useState } from "react";

function AddRecipeForm() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDecription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (recipeTitle.trim() === "") {
      newErrors.recipeTitle = "Recipe title field can't be empty";
    }

    if (ingredients.trim === "") {
      newErrors.ingredients = "Ingredients field can't be empty ";
    } else {
      const ingredientsList = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      if (ingredientsList.length < 2) {
        newErrors.ingredients =
          "Please enter at least 2 ingredients (comma-separated)";
      }
    }

    if (description.trim() === "") {
      newErrors.description = "Description field cant't be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return "Form submitted successfully";
    } else {
      setRecipeTitle("");
      setIngredients("");
      setDecription("");
    }
  };

  return (
    <div className="input-box">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 rounded-xl flex flex-col shadow-2xl p-6 w-[300px] md:w-[800px] h-[640px] md:h-[720px] justify-center "
      >
        <div className="div-style">
          <label className="label-style">
            Recipe title <br />
            <input
              className="input-style "
              type="text"
              placeholder="Recipe title"
              value={recipeTitle}
              onChange={(event) => setRecipeTitle(event.target.value)}
            />
          </label>
          {errors.recipeTitle && (
            <p className="error-text">{errors.recipeTitle}</p>
          )}
        </div>

        <div>
          <label className="label-style">
            Ingredients <br />
            <textarea
              className="input-style "
              id="ingredients"
              name="ingredients"
              rows="5"
              cols="50"
              placeholder="Enter your ingredients here..."
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
            />
          </label>
          {errors.ingredients && (
            <p className="error-text">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="label-style">
            Preparation steps <br />
            <textarea
              className="input-style "
              id="description"
              name="description"
              rows="5"
              cols="50"
              placeholder="Enter your description here..."
              value={description}
              onChange={(event) => setDecription(event.target.value)}
            />
          </label>
          {errors.description && (
            <p className="error-text">{errors.description}</p>
          )}
        </div>

        <button
          className="bg-orange-500 rounded-xl text-white font-bold p-4 w-[200px] mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
