import styles from "./Navbar.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={styles.navigation_strip}>
      <div className={styles.navbar_content}>
        <i className="bx bx-sun" id="darkLight"></i>
      </div>

      {/* <div className="contact-us-container">
        Welcome<h4 id="username">User Name</h4>
      </div> */}
      <span className="user-info-button">
        <FaRegUserCircle
          className="IconUserInfo"
          style={{
            height: "30",
            width: "30px",
          }}
        />
        <span className="user_info_username">User Name</span>
        <RiArrowDropDownLine
          style={{
            height: "30",
            width: "30px",
          }}
        />
      </span>

      <div className="user-info-popup">
        <h4 id="username1">User Name</h4>
        <div>
          <h5 id="userrole">User Role</h5>
        </div>
        <div>
          <h5 id="course_code">Course Name</h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
