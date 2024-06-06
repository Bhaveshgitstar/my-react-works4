import { Link, useParams } from "react-router-dom";

const PopularIngredientElement = ({ ingredient }) => {
  return (
    <>
      <Link
        to={`/ingredients/${ingredient.idIngredient}`}
        state={{ ingredient }}
      >
        <div className="col ">
          <div
            className="card "
            style={{ height: "18rem", width: "17rem", border: "solid 0.005px" }}
          >
            <img
              src={ingredient.strIngredientThumb}
              className="card-img-top"
              alt="..."
              style={{ height: "14rem", width: "17rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{ingredient.strIngredient}</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PopularIngredientElement;
