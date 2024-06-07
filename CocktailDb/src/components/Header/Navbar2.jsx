import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import CategoriesDropdown from "./CategoriesDropdown";
import SearchOption from "./SearchOption";

const Navbar2 = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark navbar2-component"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <Link className="navbar-brand" to="/">
          CockTailDb
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <CategoriesDropdown></CategoriesDropdown>

        <SearchOption></SearchOption>
      </div>
    </nav>
  );
};
export default Navbar2;
