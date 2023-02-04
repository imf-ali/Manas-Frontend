import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import image from '../resource/manas-logo.jpeg';

function NavBar() {

  return (
    <React.Fragment>
      <div>
        <nav className={styles.navbar}>
          <img src={image} alt="" className={styles.image}/>
          <div className={styles.links}>
            <Link to="/" className={styles.heading}>
              Home
            </Link>
            <Link to="/admissions" className={styles.heading}>
              Admissions
            </Link>
            <Link to="/" className={styles.heading}>
              Results
            </Link>
            <Link to="/" className={styles.heading}>
              Gallery
            </Link>
            <Link to="/about" className={styles.heading}>
              About us
            </Link>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
