import { useLocation } from "react-router-dom";
const IngredientDetails = ({}) => {
  const location = useLocation();
  const drink = location.state?.ingredient;
  console.log(drink);
  const tags = [];
  // const tags = drink.strTags !== null ? drink.strTags.split(",") : [];
  return (
    <>
      {drink && (
        <div className="card" style={{ width: "30rem" }}>
          <img
            src={drink.strIngredientThumb}
            className="card-img-top"
            alt="..."
            style={{ height: "25rem", width: "30rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{drink.strIngredient}</h5>
            <p className="card-text">{drink.strDescription}</p>
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

export default IngredientDetails;
