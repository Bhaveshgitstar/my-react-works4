import { useEffect, useState } from "react";
import DrinksCard from "../Drinks-Card/DrinksCard";
import api from "../../services/api";

const OrdinaryDrink = () => {
  const [DrinkList, setDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const data = await api.fetchOrdinaryDrink();
      setDrinkList(data);
      setIsFetching(false);
    };
    getData();
  }, []);

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Browse"}
      DrinkList={DrinkList}
    ></DrinksCard>
  );
};

export default OrdinaryDrink;
