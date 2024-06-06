import PopularDrinkElement from "../Image-Card/PopularDrinkElement";
import Spinner from "../Spinner/Spinner";

const DrinksCard = ({ isFetching, title, DrinkList }) => {
  return (
    <center>
      <h3 style={{ marginTop: "1%" }}>{title} Drinks</h3>
      {isFetching && <Spinner></Spinner>}
      {!isFetching && (
        <div className="row row-cols-1 row-cols-md-4 g-4 card-component">
          {DrinkList.map((drink) => (
            <PopularDrinkElement key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </center>
  );
};
export default DrinksCard;
