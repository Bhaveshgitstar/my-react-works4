import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
const DropdownMenu = ({ isDropdown }) => {
  const [DrinkList, setDrinkList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchForNavBar();
      setDrinkList(data);
    };
    getData();
  }, []);

  return (
    <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`}>
      <li>
        <Link className="dropdown-item" to={`/Category/All`}>
          All
        </Link>
      </li>
      <Link className="dropdown-item" to={`/Category/Alcoholic`}>
        Alcoholic Drinks
      </Link>

      <li>
        <Link className="dropdown-item" to={`/Category/Non-Alcoholic`}>
          Non-Alcoholic Drinks
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to={`/Category/Ordinary`}>
          Ordinary Drinks
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to={`/Category/Cocktails`}>
          Cocktails
        </Link>
      </li>
    </ul>
  );
};

export default DropdownMenu;
