import { useEffect, useState } from "react";
import api from "../../../services/api";
import IngredientCard from "../../../components/Ingredients-Card/IngredientsCard";

const PopularIngredients = () => {
  const [popularIngredientList, setPopularIngredientList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const data = await api.fetchPopularIngredients();
      setPopularIngredientList(data);
      setIsFetching(false);
    };

    getData();
  }, []);
  return (
    <IngredientCard
      isFetching={isFetching}
      title={"Popular"}
      IngredientList={popularIngredientList}
    ></IngredientCard>
  );
};
export default PopularIngredients;
