import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"

const Nav = () => {
    return (
      <nav>
        <ul className={styles.navigation}>
          <li>
            <NavLink to={"#"}>Popular</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Upcoming</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Now playing</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Top rated</NavLink>
          </li>
        </ul>
      </nav>
    );
  };

export default Nav