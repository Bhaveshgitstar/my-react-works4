import { useEffect, useState } from "react";
import api from "../../../services/api";
import DrinksCard from "../../../components/Drinks-Card/DrinksCard";

const PopularDrinks = () => {
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const drinks = await api.fetchPopularDrinkList();
      setPopularDrinkList(drinks);
      setIsFetching(false);
    };
    getData();
  }, []);

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Popular"}
      DrinkList={popularDrinkList}
    ></DrinksCard>
  );
};

export default PopularDrinks;
