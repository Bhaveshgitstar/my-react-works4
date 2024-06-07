const api = {
  fetchPopularDrinkList: async () => {
    const res = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    return drinks
      .filter((drink) => drink.strCreativeCommonsConfirmed === "Yes")
      .slice(0, 8);
  },
  fetchLatestDrinkList: async () => {
    const res = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    const sortedDrinks = drinks.sort(
      (a, b) => new Date(b.dateModified) - new Date(a.dateModified)
    );
    return sortedDrinks.slice(0, 8);
  },

  fetchPopularIngredients: async () => {
    const res = await fetch("http://localhost:31574/ingredients");
    const ingredients = await res.json();
    return ingredients
      .filter((ingredient) => ingredient.strABV === "40")
      .slice(0, 4);
  },
  fetchByAlphabet: async (char) => {
    const res = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    return drinks.filter(
      (drink) => drink.strDrink.toLowerCase()[0] === char.toLowerCase()
    );
  },
  fetchForNavBar: async () => {
    const res1 = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    const res2 = await fetch("http://localhost:31574/ingredients");
    const ingredients = await res.json();
    return [...drinks, ...ingredients];
  },
};
export default api;
