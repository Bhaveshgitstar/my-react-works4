import { useLocation } from "react-router-dom";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../services/api";

const IngredientDetails = ({}) => {
  const location = useLocation();
  const drink = location.state?.ingredient;
  const [ingredientList, setIngredientList] = useState([drink]);
  const [currIngredient, setCurrIngredient] = useState(ingredientList[0]);
  const [currIndex, setCurrIndex] = useState(0);

  const tags = [];
  useEffect(() => {
    const getData = async () => {
      const Ingredients = await api.fetchAllIngredients(drink);
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
        <div className="card" style={{ width: "50rem" }}>
          <img
            src={currIngredient.strIngredientThumb}
            className="card-img-top"
            alt="..."
            style={{ height: "25rem", width: "30rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{currIngredient.strIngredient}</h5>
            <p className="card-text">{currIngredient.strDescription}</p>
            {tags.map((tag) => (
              <span key={tag} className="btn btn-success tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
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

export default IngredientDetails;
