import { useEffect, useState } from "react";
import PopularDrinkElement from "./PopularDrinkElement";
import Spinner from "../Spinner";

let DrinkNumber = 0;

const PopularDrinks = () => {
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPopolarDrinkList = async () => {
      setIsFetching(true);
      const res = await fetch("http://localhost:31573/drinks");
      const drinks = await res.json();
      setPopularDrinkList(drinks);
      setIsFetching(false);
    };
    fetchPopolarDrinkList();
  }, []);

  return (
    <>
      <center>
        <h3 style={{ marginTop: "1%" }}>Popular Drinks</h3>
        {isFetching && <Spinner></Spinner>}
        {!isFetching && (
          <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
            {popularDrinkList
              .filter((drink) => drink.strCreativeCommonsConfirmed === "Yes")
              .slice(0, 8)
              .map((drink) => (
                <PopularDrinkElement key={drink.idDrink} drink={drink} />
              ))}
          </div>
        )}
      </center>
    </>
  );
};

export default PopularDrinks;
