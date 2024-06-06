import { Children, createContext, useContext, useReducer } from "react";

export const ListCocktail = createContext({});

const ListCocktailReducer = (currCocktailDb, action) => {};

const CocktailDbProvider = ({ children }) => {
  const [listCocktail, dispatchCocktail] = useReducer(ListCocktailReducer, []);
  return <ListCocktail.Provider value={{}}>{children}</ListCocktail.Provider>;
};

export default CocktailDbProvider;
