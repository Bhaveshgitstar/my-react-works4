import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const CategoriesDropdown = () => {
  const [isDropdown, setDropdown] = useState(false);
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle `}
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded={isDropdown}
            onClick={(e) => {
              e.preventDefault();
              setDropdown(!isDropdown);
            }}
          >
            Categories
          </a>
          <DropdownMenu isDropdown={isDropdown}></DropdownMenu>
        </li>
      </ul>
    </>
  );
};
export default CategoriesDropdown;
