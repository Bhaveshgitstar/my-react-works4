import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import DrinkDetail from "./views/Drinks/DrinkDetail.jsx";
import BrowseCocktail from "./views/Browse-Alphabet/BrowseCocktail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <></> },
      { path: "/home", element: <Home /> },
      {
        path: "/drinks/:id",
        element: <DrinkDetail></DrinkDetail>,
      },
      {
        path: "/browse/:id",
        element: <BrowseCocktail></BrowseCocktail>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
