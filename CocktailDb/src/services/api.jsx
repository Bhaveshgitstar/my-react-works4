const api = {
  fetchPopularDrinkList: async () => {
    const res = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    return drinks;
  },
  fetchLatestDrinkList: async () => {
    const res = await fetch("http://localhost:31573/drinks");
    const drinks = await res.json();
    const sortedDrinks = drinks.sort(
      (a, b) => new Date(b.dateModified) - new Date(a.dateModified)
    );
    return sortedDrinks;
  },

  fetchPopularIngredients: async () => {
    const res = await fetch("http://localhost:31574/ingredients");
    const ingredients = await res.json();
    return ingredients;
  },
};
export default api;
