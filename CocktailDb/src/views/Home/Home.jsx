import LatestDrinks from "./components/LatestDrinks";
import PopularDrinks from "./components/PopularDrinks";
import PopularIngredients from "./components/PopularIngredients";
import RandomDrinks from "./components/RandomDrink";

const Home = () => {
  return (
    <>
      <PopularDrinks></PopularDrinks>
      <PopularIngredients></PopularIngredients>
      <RandomDrinks></RandomDrinks>
      <LatestDrinks></LatestDrinks>
    </>
  );
};

export default Home;
