import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1> Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />

          {/* Details page: Show recipe details */}
          <Route path="/details/:id" element={<RecipeDetails />} />

          {/* Edit page: Edit an existing recipe */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
