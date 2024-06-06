import { useEffect, useState } from "react";
import PopularDrinkElement from "./PopularDrinkElement";
import Spinner from "../Spinner";

const RandomDrinks = () => {
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getRandomDrinks = (drinks) => {
    for (let i = drinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [drinks[i], drinks[j]] = [drinks[j], drinks[i]];
    }
    return drinks.slice(0, 8);
  };
  // const sortedDrinks = data.sort(
  //   (a, b) => new Date(b.dateModified) - new Date(a.dateModified)
  // );
  // setPopularDrinkList(sortedDrinks);

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

  return (
    <>
      <center>
        <h3 style={{ marginTop: "1%" }}>Random Drinks</h3>
        {isFetching && <Spinner></Spinner>}
        {!isFetching && (
          <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
            {popularDrinkList.map((drink) => (
              <PopularDrinkElement key={drink.idDrink} drink={drink} />
            ))}
          </div>
        )}
      </center>
    </>
  );
};

export default RandomDrinks;
