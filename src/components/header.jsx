import React from "react";
import { Navbar } from "./navbar";
import styles from "./components.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="logo">Cover</h1>
      <Navbar />
    </header>
  );
};
