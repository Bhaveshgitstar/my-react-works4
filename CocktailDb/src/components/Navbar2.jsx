import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isDropdown, setDropdown] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark navbar2-component"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <a className="navbar-brand" href="#">
          CockTailDb
        </a>
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

        <div
          className="navbar-collapse collapse"
          id="navbarsExample07XL"
          style={{}}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
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
                Dropdown
              </a>
              <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar2;
