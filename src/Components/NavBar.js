import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import image from '../resource/manas-logo.jpeg';
import userStore from "../store/userStore";
import AuthContext from "../store/AuthContext";

function NavBar() {

  const { manasInstance } = useContext(AuthContext);

  const { isAdmin, isStudent } = userStore((state) => ({ isAdmin: state.isAdmin, isStudent: state.isStudent}));
  const setIsLogin = userStore((state) => state.setIsLogin);

  const logoutHandler = async () => {
    const user = localStorage.getItem('user');
    const res = await manasInstance.logoutHandler(user);
    if(res.status === 200) {
      setIsLogin(false,false,undefined);
    }
  }

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
            {(!isAdmin && !isStudent) && <Link to="/login" className={styles.heading}>
              Login
            </Link>}
            {(isAdmin || isStudent) && <Link to="/notice" className={styles.heading}>
              Notice
            </Link>}
            {(isStudent) && <Link to="/mtspage" className={styles.heading}>
              MTS
            </Link>}
            {isAdmin && <Link to="/uploadnotice" className={styles.heading}>
              Notice Upload
            </Link>}
            {(isAdmin || isStudent) && <div className={styles.heading} onClick={logoutHandler}>
              Logout
            </div>}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
