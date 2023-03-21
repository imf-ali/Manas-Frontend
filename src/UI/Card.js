import React from "react";
import styles from "./Card.module.css";

export const Card = ({ subtitle, title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {subtitle.map((value, index) => {
        return <span key={index}>{value}</span>
      })}
    </div>
  );
};
