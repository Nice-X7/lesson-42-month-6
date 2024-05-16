import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./components.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
