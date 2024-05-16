import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Cover your page</h1>
      <main>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </main>
      <button>Learn more</button>
    </div>
  );
};
