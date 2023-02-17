import React from "react";
import { directorProfile } from "../lib/data";
import styles from "./DirectorProfile.module.css";

function Director() {
  return (
    <div className={styles.directorContainer}>
      <div className={styles.directorImage}>
        <img
          src={directorProfile.image}
          alt={directorProfile.name}
          className={styles.directorImg}
        />
        <div className={styles.directorText}>
          <h3>{directorProfile.name}</h3>
          <p>{directorProfile.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Director;
