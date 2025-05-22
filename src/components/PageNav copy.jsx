import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function NavPage() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
