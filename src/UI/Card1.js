import React from "react";
import styles from "./Card1.module.css";

export const Card1 = ({ subtitle, title, year }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{year}</h3>
      <p>{subtitle}</p>
      <button>Apply</button>
    </div>
  );
};
