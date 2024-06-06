import { useEffect, useState } from "react";
import api from "../../../services/api";
import DrinksCard from "../../../components/Drinks-Card/DrinksCard";
const LatestDrinks = () => {
  const [popularDrinkList, setPopularDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const sortedDrinks = await api.fetchLatestDrinkList();
      setPopularDrinkList(sortedDrinks);
      setIsFetching(false);
    };

    getData();
  }, []);

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Latest"}
      DrinkList={popularDrinkList}
    ></DrinksCard>
  );
};

export default LatestDrinks;
