import React from "react";
import styles from "./Card1.module.css";

export const Card1 = ({ subtitle, title, year, eligibility }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{year}</h3>
      <h4>{eligibility}</h4>
      <p>{subtitle}</p>
      {/* <button>Apply</button> */}
    </div>
  );
};
