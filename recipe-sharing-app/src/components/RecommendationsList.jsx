// src/components/RecommendationsList.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "./recipestores";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations yet.</p>;
  }

  return (
    <div>
      <h2> Recommendations</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      <button onClick={generateRecommendations}>Refresh Recommendations</button>
    </div>
  );
}
