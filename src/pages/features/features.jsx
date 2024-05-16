import React from "react";
import { Buttons } from "./buttons";
import styles from "./features.module.css";

export const Features = () => {
  return (
    <div className={styles.features}>
      <h1>Features your page</h1>
      <main>
        Features is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </main>
      <Buttons />
    </div>
  );
};
