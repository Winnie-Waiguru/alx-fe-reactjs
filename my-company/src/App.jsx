import React, { Children } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
