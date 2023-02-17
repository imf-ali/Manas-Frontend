import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerLeft}>+91-080025-15958</div>
      <div className={styles.headerRight}>
        <a href="#">Online Registration Form</a>
        <div className={styles.vl}></div>
        <a href="#"> Contact Us</a>
        <div className={styles.vl}></div>
        <a href="#">Online Counselling Help</a>
      </div>
    </header>
  );
};

export default Header;