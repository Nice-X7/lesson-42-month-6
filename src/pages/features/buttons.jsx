import React from "react";
import styles from "./features.module.css";

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.learn_more}>Learn more</button>
      <button className={styles.read_more}>Read more</button>
    </div>
  );
};
