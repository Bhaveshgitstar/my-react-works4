import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import DrinksCard from "../../components/Drinks-Card/DrinksCard";

const BrowseCocktail = () => {
  const location = useLocation();
  const drink = location.state?.char[0];
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const data = await api.fetchByAlphabet(drink);
      setPopularDrinkList(data);
      setIsFetching(false);
    };

    getData();
  }, [location]);

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Browse"}
      DrinkList={popularDrinkList}
    ></DrinksCard>
  );
};
export default BrowseCocktail;
