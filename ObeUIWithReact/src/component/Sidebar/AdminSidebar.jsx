import { useState } from "react";
import styles from "../Sidebar/Sidebar.module.css";

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <nav
      className={`${styles.sidebar} ${isSideBarOpen ? "" : styles.close}`}
      onMouseEnter={() => {
        setIsSideBarOpen(true);
      }}
      onMouseLeave={() => {
        setIsSideBarOpen(false);
      }}
    >
      <div className={styles.menu_content}>
        <ul className={styles.menu_items}>
          <div
            className={`${styles.menu_title} ${styles.menu_dahsboard}`}
          ></div>

          <li className={styles.item}>
            <a href="/adminhome" className={styles.nav_link}>
              <span className={styles.navlink_icon}>
                <i className="bx bx-home-alt"></i>
              </span>
              <span className={styles.navlink}>Home</span>
            </a>
          </li>

          <li className={styles.item}>
            <div
              href="#"
              className={`${styles.nav_link} ${styles.submenu_item}`}
            >
              <span className={styles.navlink_icon}>
                <i className="bx bx-user"></i>
              </span>
              <span className={styles.navlink}>Mapping</span>
              <i className="bx bx-chevron-right arrow-left"></i>
            </div>

            <ul className={`${styles.menu_items} ${styles.submenu}`}>
              <a
                href="/coursemapping"
                className={`${styles.nav_link} ${styles.sublink}`}
              >
                Course Mapping
              </a>
              <a
                href="/adminmapping"
                className={`${styles.nav_link} ${styles.sublink}`}
              >
                Coordinator Mapping
              </a>
              <a
                href="/adminmapping2"
                className={`${styles.nav_link} ${styles.sublink}`}
              >
                Teacher Mapping
              </a>
              <a
                href="/addnewfaculty"
                className={`${styles.nav_link} ${styles.sublink}`}
              >
                Add New Faculty
              </a>
            </ul>
          </li>
        </ul>

        <ul className="menu_items" />
        <div className={`${styles.menu_title} ${styles.menu_setting}`}></div>
        <li className={styles.item}>
          <a href="/logout" className={styles.nav_link}>
            <span className={styles.navlink_icon}>
              <i className="bx bx-log-out"></i>
            </span>
            <span className={styles.navlink}>Logout</span>
          </a>
        </li>

        <div className={styles.bottom_content}>
          <div className={`${styles.bottom} ${styles.expand_sidebar}`}>
            <span> Expand</span>
            <i className="bx bx-log-in"></i>
          </div>
          <div className={`${styles.bottom} ${styles.collapse_sidebar}`}>
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
