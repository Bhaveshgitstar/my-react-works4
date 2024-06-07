import { useEffect, useState } from "react";
import DrinksCard from "../Drinks-Card/DrinksCard";
import api from "../../services/api";

const NonAlcoholic = () => {
  const [DrinkList, setDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const data = await api.fetchNonAlcoholic();
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

export default NonAlcoholic;
