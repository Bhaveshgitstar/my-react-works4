import { useState } from "react";
import styles from "../Sidebar/Sidebar.module.css";
const Mapping = ({ setIsSideBarOpen }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  return (
    <li
      className={styles.item}
      onMouseLeave={() => {
        setIsSubmenuOpen(false);
      }}
    >
      <div
        href="#"
        className={`${styles.nav_link} ${styles.submenu_item}`}
        onClick={() => {
          setIsSubmenuOpen(!isSubmenuOpen);
        }}
      >
        <span className={styles.navlink_icon}>
          <i className="bx bx-user"></i>
        </span>
        <span className={styles.navlink}>Mapping</span>
        <i className="bx bx-chevron-right arrow-left"></i>
      </div>

      <ul
        className={`${styles.menu_items} ${
          isSubmenuOpen ? styles.show_submenu : styles.submenu
        } `}
      >
        <a
          href="/admin/mapping/course"
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
  );
};
export default Mapping;
