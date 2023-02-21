import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <FaPhoneAlt />
        +91-8809552269
      </div>
      <div className={styles.headerRight}>
        <a href="#"> Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
