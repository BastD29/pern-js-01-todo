import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar: FC = () => {
  const location = useLocation();
  // const currentSearch = location.search;

  return (
    <nav className={style["navbar"]}>
      <NavLink
        to="/"
        // to={{ pathname: "/", search: currentSearch }}
        className={({ isActive }) => (isActive ? style["active"] : "")}
      >
        Home
      </NavLink>
      <NavLink
        // to="/store"
        // to={{ pathname: "/store", search: currentSearch }}
        to={`/store${location.search}`} // Include current search parameters
        className={({ isActive }) => (isActive ? style["active"] : "")}
      >
        Store
      </NavLink>
    </nav>
  );
};

export default Navbar;
