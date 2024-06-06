import LatestDrinks from "./components/LatestDrinks";
import PopularDrinks from "./components/PopularDrinks";
import RandomDrinks from "./components/RandomDrink";

const Home = () => {
  return (
    <>
      <PopularDrinks></PopularDrinks>
      <RandomDrinks></RandomDrinks>
      <LatestDrinks></LatestDrinks>
    </>
  );
};

export default Home;
