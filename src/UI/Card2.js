import React from "react";
import styles from "./Card2.module.css";

export const Card2 = ({ subtitle, title }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.text}>
        {subtitle.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </div>
  );
};
