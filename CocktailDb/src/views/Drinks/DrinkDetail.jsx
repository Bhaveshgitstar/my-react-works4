import { useLocation } from "react-router-dom";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import DrinkIngredients from "../../components/Image-Card/DrinkIngredients";

const DrinkDetail = () => {
  const location = useLocation();
  const drink = location.state?.drink;
  const [ingredientList, setIngredientList] = useState([drink]);
  const [currIngredient, setCurrIngredient] = useState(ingredientList[0]);
  const tags =
    currIngredient.strTags !== null ? currIngredient.strTags.split(",") : [];
  let DrinkIngredient = [
    [currIngredient.strIngredient1, currIngredient.strMeasure1],
    [currIngredient.strIngredient2, currIngredient.strMeasure2],
    [currIngredient.strIngredient3, currIngredient.strMeasure3],
    [currIngredient.strIngredient4, currIngredient.strMeasure4],
    [currIngredient.strIngredient5, currIngredient.strMeasure5],
    [currIngredient.strIngredient6, currIngredient.strMeasure6],
    [currIngredient.strIngredient7, currIngredient.strMeasure7],
    [currIngredient.strIngredient8, currIngredient.strMeasure8],
    [currIngredient.strIngredient9, currIngredient.strMeasure9],
    [currIngredient.strIngredient10, currIngredient.strMeasure10],
    [currIngredient.strIngredient11, currIngredient.strMeasure11],
    [currIngredient.strIngredient12, currIngredient.strMeasure12],
    [currIngredient.strIngredient13, currIngredient.strMeasure13],
    [currIngredient.strIngredient14, currIngredient.strMeasure14],
    [currIngredient.strIngredient15, currIngredient.strMeasure15],
  ];

  const [currIndex, setCurrIndex] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const Ingredients = await api.fetchAllDrinks(drink);
      setIngredientList([drink, ...Ingredients]);
    };
    getData();
  }, []);

  useEffect(() => {
    setCurrIngredient(ingredientList[currIndex]);
  }, [currIndex]);
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-2 g-1 card-component"
        style={{ minWidth: "100%" }}
      >
        {drink && (
          <div className="card col" style={{ width: "40rem" }}>
            <Link to={currIngredient.strDrinkThumb}>
              <img
                src={currIngredient.strDrinkThumb}
                className="card-img-top"
                alt="..."
                style={{ height: "30rem", width: "39rem" }}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{currIngredient.strDrink}</h5>
              <p className="card-text">{currIngredient.strInstructions}</p>
              {tags.map((tag) => (
                <span key={tag} className="btn btn-success tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="row row-cols-1 row-cols-md-3 g-3 card-component">
          {DrinkIngredient.map((ingredient) => (
            <DrinkIngredients ingredient={ingredient} />
          ))}
        </div>
        <div>
          <FaLessThan
            style={{ width: "8rem", height: "7rem", marginLeft: " 75px" }}
            onClick={() => {
              if (currIndex + 1 === ingredientList.length) setCurrIndex(0);
              else setCurrIndex(currIndex + 1);
            }}
          />

          <FaGreaterThan
            style={{ width: "8rem", height: "7rem" }}
            onClick={() => {
              if (currIndex - 1 === -1)
                setCurrIndex(Math.max(0, ingredientList.length - 1));
              else setCurrIndex(currIndex - 1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DrinkDetail;
