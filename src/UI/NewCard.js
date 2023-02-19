import React from "react";
import image from "../resource/displayPic/manasHand.jpeg";
import styles from "./NewCard.module.css";
import { Link } from "react-router-dom";

export const NewCard = ({ id, subtitle, title, heading }) => {
  return (
    <div className={`${styles.inner} ${styles.card}`}>
      <div className={styles.cardLeft}>
        <div className={styles.cardimage}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.cardRight}>
        <h2>{heading}</h2>
        <div className={styles.cardTitle}>
          Posted by : <span>{title}</span>
        </div>
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: `${subtitle.substring(0,140)} [...]` }} />
        </div>
        <Link to={`/blogs/${id}`} className={styles.readMore}>
          <h4>Read More</h4>
        </Link>
      </div>
    </div>
  );
};
