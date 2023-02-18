import React from "react";
import styles from "./NewCard.module.css";

export const NewCard = ({ subtitle, title }) => {
  return (
    <div className={`${styles.inner} ${styles.card}` }>
      <h3>{title}</h3>
      <span dangerouslySetInnerHTML={{ __html: subtitle}} />
      <h2>Read More</h2>
    </div>
  );
};
