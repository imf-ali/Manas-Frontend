import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <FaPhoneAlt />
        <a href="tel:+918809552269">+91-8809552269</a>
      </div>
      <div className={styles.headerRight}>
        {/* <a href="#"> Contact Us</a> */}
      </div>
    </header>
  );
};

export default Header;
