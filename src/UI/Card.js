import React from "react";
import styles from "./Card.module.css";

export const Card = ({
  subtitle,
  title,
}) => {

  return (
    <article className={styles.card}>
      <section className={styles.topSection}>
        <h3>{title}</h3>
      </section>
      <section className={styles.bottomSection}>
        <span>{subtitle}</span>
      </section>
    </article>
  );
};
