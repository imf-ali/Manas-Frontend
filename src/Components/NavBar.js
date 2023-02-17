import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import image from "../resource/manas-logo.jpeg";
import mts from "../resource/mts.png";
import userStore from "../store/userStore";
import AuthContext from "../store/AuthContext";

function NavBar() {
  const { manasInstance } = useContext(AuthContext);

  const { isAdmin, isStudent } = userStore((state) => ({
    isAdmin: state.isAdmin,
    isStudent: state.isStudent,
  }));
  const setIsLogin = userStore((state) => state.setIsLogin);

  const logoutHandler = async () => {
    const user = localStorage.getItem("user");
    const res = await manasInstance.logoutHandler(user);
    if (res.status === 200) {
      setIsLogin(false, false, undefined);
    }
  };

  return (
    <>
      <nav className={styles.navbar} id="navbar">
        <img src={image} alt="" className={styles.image} />
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
          <Link to="/blogs" className={styles.heading}>
            Blogs
          </Link>
          {(isAdmin || isStudent) && (
            <Link to="/notice" className={styles.heading}>
              Notice
            </Link>
          )}
          {isAdmin && (
            <Link to="/uploadnotice" className={styles.heading}>
              Notice Upload
            </Link>
          )}
          {isAdmin && (
            <Link to="/approveblog" className={styles.heading}>
              Manage Blogs
            </Link>
          )}
          {isStudent && (
            <Link to="/mtspage" className={styles.heading}>
              MTS
            </Link>
          )}
          {!isStudent && !isAdmin && (
            <Link to="/login" className={styles.heading}>
              Student
            </Link>
          )}
          {!isStudent && !isAdmin && (
            <Link to="/admin" className={styles.heading}>
              Admin
            </Link>
          )}
          {(isAdmin || isStudent) && (
            <div className={styles.heading} onClick={logoutHandler}>
              Logout
            </div>
          )}
        </div>
        <img src={mts} alt="" className={styles.image} />
      </nav>
    </>
  );
}

export default NavBar;
