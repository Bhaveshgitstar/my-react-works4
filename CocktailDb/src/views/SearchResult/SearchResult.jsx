import { useEffect, useState } from "react";

import api from "../../services/api";
import DrinksCard from "../../components/Drinks-Card/DrinksCard";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const drink = location.state?.id;
  const [DrinkList, setDrinkList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const data = await api.fetchForSearch(drink);
      setDrinkList(data);
      setIsFetching(false);
    };
    getData();
  }, [location]);

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Browse"}
      DrinkList={DrinkList}
    ></DrinksCard>
  );
};

export default SearchResult;
