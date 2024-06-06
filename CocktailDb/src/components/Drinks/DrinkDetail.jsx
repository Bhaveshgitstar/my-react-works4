import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";

const DrinkDetail = () => {
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const drink = location.state?.drink;
  return (
    <>
      {drink && (
        <div className="card" style={{ width: "30rem" }}>
          <img
            src={drink.strDrinkThumb}
            className="card-img-top"
            alt="..."
            style={{ height: "25rem", width: "30rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{drink.strDrink}</h5>
            <p className="card-text">{drink.strInstructions}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DrinkDetail;
