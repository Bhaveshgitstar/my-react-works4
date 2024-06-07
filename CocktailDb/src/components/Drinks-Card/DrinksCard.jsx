import Navbar2 from "../Header/Navbar2";
import PopularDrinkElement from "../Image-Card/PopularDrinkElement";
import Spinner from "../Spinner/Spinner";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

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
      {!isFetching && DrinkList.length == 0 && (
        <WelcomeMessage></WelcomeMessage>
      )}
    </center>
  );
};
export default DrinksCard;
