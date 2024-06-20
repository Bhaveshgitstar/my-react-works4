import { useState } from "react";
import styles from "../Sidebar/Sidebar.module.css";
import { Link } from "react-router-dom";
import Mapping from "./MappingSubmenu";
const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const userRole = "Admin";
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
            <Link to="/admin/home" className={styles.nav_link}>
              <span className={styles.navlink_icon}>
                <i className="bx bx-home-alt"></i>
              </span>
              <span className={styles.navlink}>Home</span>
            </Link>
          </li>

          {userRole === "Admin" && <Mapping></Mapping>}
          <li class={styles.item}>
            <div href="#" class={`${styles.nav_link} ${styles.submenu_item}`}>
              <span class={styles.navlink_icon}>
                <i class="bx bx-user"></i>
              </span>
              <span class={styles.navlink}>Attainment</span>
              <i class="bx bx-chevron-right arrow-left"></i>
            </div>
            <ul class={`${styles.menu_items} ${styles.submenu}`}>
              <a
                href="/courseoutcomeopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                Course Outcome
              </a>
              <a
                href="/attainmentt1opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T1
              </a>
              <a
                href="/attainmentt2opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T2
              </a>
              <a
                href="/attainmentt3opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T3
              </a>
              <a
                href="/attainmenttaopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                TA
              </a>
              <a
                href="/atcourseexitopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                Course Exit Survey
              </a>
              <a
                href="/atcopsomapopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                CO-PO Attainment
              </a>
            </ul>
          </li>
          <li class={styles.item}>
            <div href="#" class={`${styles.nav_link} ${styles.submenu_item}`}>
              <span class={styles.navlink_icon}>
                <i class="bx bx-user"></i>
              </span>
              <span class={styles.navlink}>Examination</span>
              <i class="bx bx-chevron-right arrow-left"></i>
            </div>

            <ul class={`${styles.menu_items} ${styles.submenu}`}>
              <a
                href="/courseexamt1opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T1
              </a>
              <a
                href="/courseexamt2opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T2
              </a>
              <a
                href="/courseexamt3opt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                T3
              </a>
              <a
                href="/courseexamtaopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                TA
              </a>
            </ul>
          </li>

          <li class={styles.item}>
            <div href="#" class={`${styles.nav_link} ${styles.submenu_item}`}>
              <span class={styles.navlink_icon}>
                <i class="bx bx-user"></i>
              </span>
              <span class={styles.navlink}>Reports</span>
              <i class="bx bx-chevron-right arrow-left"></i>
            </div>

            <ul class={`${styles.menu_items} ${styles.submenu}`}>
              <a
                href="/openingreportopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                Opening Report
              </a>
              <a
                href="/closingreportopt"
                class={`${styles.nav_link} ${styles.sublink}`}
              >
                Closing Report
              </a>
            </ul>
          </li>
        </ul>

        <ul className={styles.menu_items} />
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
