import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
