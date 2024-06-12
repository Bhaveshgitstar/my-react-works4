import { useState } from "react";
import "../Sidebar/Sidebar.module.css";
const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <nav
      className={`sidebar ${isSideBarOpen ? "" : "close"}`}
      onMouseEnter={() => {
        setIsSideBarOpen(true);
      }}
      onMouseLeave={() => {
        setIsSideBarOpen(false);
      }}
    >
      <div className="menu_content">
        <ul className="menu_items">
          <div className="menu_title menu_dahsboard"></div>

          <li className="item">
            <a href="/adminhome" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-home-alt"></i>
              </span>
              <span className="navlink">Home</span>
            </a>
          </li>

          <li className="item">
            <div href="#" className="nav_link submenu_item">
              <span className="navlink_icon">
                <i className="bx bx-user"></i>
              </span>
              <span className="navlink">Mapping</span>
              <i className="bx bx-chevron-right arrow-left"></i>
            </div>

            <ul className="menu_items submenu">
              <a href="/coursemapping" className="nav_link sublink">
                Course Mapping
              </a>
              <a href="/adminmapping" className="nav_link sublink">
                Coordinator Mapping
              </a>
              <a href="/adminmapping2" className="nav_link sublink">
                Teacher Mapping
              </a>
              <a href="/addnewfaculty" className="nav_link sublink">
                Add New Faculty
              </a>
            </ul>
          </li>
        </ul>

        <ul className="menu_items" />
        <div className="menu_title menu_setting"></div>
        <li className="item">
          <a href="/logout" className="nav_link">
            <span className="navlink_icon">
              <i className="bx bx-log-out"></i>
            </span>
            <span className="navlink">Logout</span>
          </a>
        </li>

        <div className="bottom_content">
          <div className="bottom expand_sidebar">
            <span> Expand</span>
            <i className="bx bx-log-in"></i>
          </div>
          <div className="bottom collapse_sidebar">
            <span> Collapse</span>
            <i
              className="bx bx-log-out"
              onClick={() => {
                setIsSideBarOpen(!isSideBarOpen);
              }}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
