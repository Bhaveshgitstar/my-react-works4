import { Link, useParams } from "react-router-dom";

const DrinkIngredients = ({ ingredient }) => {
  return (
    <>
      {ingredient[0] !== null && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/ingredients/${ingredient[0]}`}
          state={{ ingredient }}
        >
          <div className="col ">
            <div
              className="card "
              style={{
                height: "18rem",
                width: "17rem",
                border: "solid 0.005px",
              }}
            >
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient[0]}.png`}
                className="card-img-top"
                alt="..."
                style={{ height: "14rem", width: "17rem" }}
              />

              <div className="card-body">
                <h5 className="card-title">{`${
                  ingredient[1] !== null ? ingredient[1] : ""
                } ${ingredient[0]}`}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default DrinkIngredients;
