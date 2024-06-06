import DrinksCard from "../../../components/Drinks-Card/DrinksCard";
import { useGetData } from "../../../hooks/useGetData";

const RandomDrinks = () => {
  const [isFetching, popularDrinkList] = useGetData();

  return (
    <DrinksCard
      isFetching={isFetching}
      title={"Random"}
      DrinkList={popularDrinkList}
    ></DrinksCard>
  );
};

export default RandomDrinks;
