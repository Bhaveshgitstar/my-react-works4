import { Link, useParams } from "react-router-dom";

const PopularDrinkElement = ({ drink }) => {
  return (
    <>
      <Link to={`/drinks/${drink.idDrink}`} state={{ drink }}>
        <div className="col ">
          <div
            className="card "
            style={{ height: "18rem", width: "17rem", border: "solid 0.005px" }}
          >
            <img
              src={drink.strDrinkThumb}
              className="card-img-top"
              alt="..."
              style={{ height: "14rem", width: "17rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{drink.strDrink}</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PopularDrinkElement;
