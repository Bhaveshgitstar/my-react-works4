import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

import { CgHello } from "react-icons/cg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 mb-md-0 text-body-secondary">
            <svg className="bi" width="24" height="24">
              <CgHello />
            </svg>
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <span className="bi" width="24" height="24">
                <FaSquareXTwitter />
              </span>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <span className="bi" width="24" height="24">
                <FaInstagram />
              </span>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <span className="bi" width="24" height="24">
                <FaSquareFacebook />
              </span>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
