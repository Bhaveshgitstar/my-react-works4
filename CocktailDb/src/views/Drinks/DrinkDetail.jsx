import { useLocation } from "react-router-dom";

const DrinkDetail = () => {
  const location = useLocation();
  const drink = location.state?.drink;
  const tags = drink.strTags !== null ? drink.strTags.split(",") : [];
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
            {tags.map((tag) => (
              <span key={tag} className="btn btn-success tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DrinkDetail;
