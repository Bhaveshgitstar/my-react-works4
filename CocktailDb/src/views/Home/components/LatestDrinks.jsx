import { useEffect, useState } from "react";
import PopularDrinkElement from "../../../components/Image-Card/PopularDrinkElement";
import Spinner from "../../../components/Spinner/Spinner";
import api from "../../../services/api";
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
    <>
      <center>
        <h3 style={{ marginTop: "1%" }}>Latest Drinks</h3>
        {isFetching && <Spinner></Spinner>}
        {!isFetching && (
          <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
            {popularDrinkList.slice(0, 8).map((drink) => (
              <PopularDrinkElement key={drink.idDrink} drink={drink} />
            ))}
          </div>
        )}
      </center>
    </>
  );
};

export default LatestDrinks;
