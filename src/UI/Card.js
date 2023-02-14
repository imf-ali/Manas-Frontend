import React from "react";
import styles from "./Card.module.css";

export const Card = ({ subtitle, title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
};
