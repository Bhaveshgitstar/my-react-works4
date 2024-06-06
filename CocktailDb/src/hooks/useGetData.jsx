import { useState, useEffect } from "react";

export const useGetData = () => {
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getRandomDrinks = (drinks) => {
    for (let i = drinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [drinks[i], drinks[j]] = [drinks[j], drinks[i]];
    }
    return drinks.slice(0, 8);
  };

  useEffect(() => {
    const fetchPopolarDrinkList = async () => {
      setIsFetching(true);
      const res = await fetch("http://localhost:31573/drinks");
      const drinks = await res.json();
      setPopularDrinkList(getRandomDrinks(drinks));
      setIsFetching(false);
    };
    fetchPopolarDrinkList();
  }, []);
  return [isFetching, popularDrinkList];
};
