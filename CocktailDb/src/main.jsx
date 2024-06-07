import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import DrinkDetail from "./views/Drinks/DrinkDetail.jsx";
import BrowseCocktail from "./views/Browse-Alphabet/BrowseCocktail.jsx";
import Alcoholic from "./components/CategoryResult/Alcoholic.jsx";
import NonAlcoholic from "./components/CategoryResult/NonAlcoholic.jsx";
import All from "./components/CategoryResult/All.jsx";
import Cocktail from "./components/CategoryResult/Cocktail.jsx";
import OrdinaryDrink from "./components/CategoryResult/OrdinaryDrink.jsx";
import SearchResult from "./views/SearchResult/SearchResult.jsx";
import IngredientDetails from "./views/Ingredients/Ingredient.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/drinks/:id",
        element: <DrinkDetail />,
      },
      {
        path: "/browse/:id",
        element: <BrowseCocktail />,
      },
      {
        path: "/Category/All",
        element: <All />,
      },
      {
        path: "/Category/Ordinary",
        element: <OrdinaryDrink />,
      },
      {
        path: "/Category/Alcoholic",
        element: <Alcoholic />,
      },
      {
        path: "/Category/Non-Alcoholic",
        element: <NonAlcoholic />,
      },
      {
        path: "/Category/Cocktails",
        element: <Cocktail />,
      },
      {
        path: "/search/:id",
        element: <SearchResult />,
      },
      {
        path: "/search/",
        element: <Home />,
      },
      {
        path: "/ingredients/:id",
        element: <IngredientDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
