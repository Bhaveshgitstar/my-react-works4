import PopularIngredientElement from "../Image-Card/PopularIngredientElement";
import Spinner from "../Spinner/Spinner";

const IngredientCard = ({ isFetching, IngredientList, title }) => {
  return (
    <center>
      <h3 style={{ marginTop: "1%" }}>{title} Ingredients</h3>
      {isFetching && <Spinner></Spinner>}
      {!isFetching && (
        <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
          {IngredientList.map((ingredient) => (
            <PopularIngredientElement
              key={ingredient.idIngredient}
              ingredient={ingredient}
            />
          ))}
        </div>
      )}
    </center>
  );
};

export default IngredientCard;
