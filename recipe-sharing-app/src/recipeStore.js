import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "samplerecipe", description: "This should display" },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
