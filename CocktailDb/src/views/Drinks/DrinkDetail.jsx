import { useLocation } from "react-router-dom";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../services/api";
import PopularIngredientElement from "../../components/Image-Card/PopularIngredientElement";

const DrinkDetail = () => {
  const location = useLocation();
  const drink = location.state?.drink;
  const [ingredientList, setIngredientList] = useState([drink]);
  const [currIngredient, setCurrIngredient] = useState(ingredientList[0]);
  const tags =
    currIngredient.strTags !== null ? currIngredient.strTags.split(",") : [];
  const DrinkIngredients = [
    currIngredient.strIngredient1,
    currIngredient.strIngredient2,
    currIngredient.strIngredient3,
    currIngredient.strIngredient4,
    currIngredient.strIngredient5,
    currIngredient.strIngredient6,
    currIngredient.strIngredient7,
    currIngredient.strIngredient8,
    currIngredient.strIngredient9,
    currIngredient.strIngredient10,
    currIngredient.strIngredient11,
    currIngredient.strIngredient12,
    currIngredient.strIngredient13,
    currIngredient.strIngredient14,
    currIngredient.strIngredient15,
  ];

  const DrinkMeasures = [
    currIngredient.strMeasure1,
    currIngredient.strMeasure2,
    currIngredient.strMeasure3,
    currIngredient.strIngredient4,
    currIngredient.strIngredient5,
    currIngredient.strIngredient6,
    currIngredient.strIngredient7,
    currIngredient.strIngredient8,
    currIngredient.strIngredient9,
    currIngredient.strIngredient10,
    currIngredient.strIngredient11,
    currIngredient.strIngredient12,
    currIngredient.strIngredient13,
    currIngredient.strIngredient14,
    currIngredient.strIngredient15,
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
      {drink && (
        <div rowspan="4" className="card " style={{ width: "30rem" }}>
          <img
            src={currIngredient.strDrinkThumb}
            className="card-img-top"
            alt="..."
            style={{ height: "25rem", width: "30rem" }}
          />
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
      {/* <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
        {DrinkIngredients.map((drink) => (
          <PopularIngredientElement key={drink} ingredient={drink} />
        ))}
      </div> */}
      <FaLessThan
        style={{ width: "10rem", height: "7rem", marginLeft: " 50px" }}
        onClick={() => {
          if (currIndex + 1 === ingredientList.length) setCurrIndex(0);
          else setCurrIndex(currIndex + 1);
        }}
      />

      <FaGreaterThan
        style={{ width: "10rem", height: "7rem" }}
        onClick={() => {
          if (currIndex - 1 === -1)
            setCurrIndex(Math.max(0, ingredientList.length - 1));
          else setCurrIndex(currIndex - 1);
        }}
      />
    </>
  );
};

export default DrinkDetail;
