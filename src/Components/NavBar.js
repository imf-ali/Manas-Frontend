import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";
import image from "../resource/green.png";
import mts from "../resource/mts.png";
import userStore from "../store/userStore";
import { FaBars } from "react-icons/fa";
import AuthContext from "../store/AuthContext";

function NavBar() {
  const { manasInstance } = useContext(AuthContext);
  const { isAdmin, isStudent } = userStore((state) => ({
    isAdmin: state.isAdmin,
    isStudent: state.isStudent,
  }));
  const setIsLogin = userStore((state) => state.setIsLogin);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  const logoutHandler = async () => {
    const user = localStorage.getItem("user");
    const res = await manasInstance.logoutHandler(user);
    if (res.status === 200) {
      setIsLogin(false, false, undefined);
      navigate('/');
    }
  };
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav
        className={`${showNavbar ? "navbar responsiveNav" : "navbar"} ${
          hasScrolled ? "navbar-fixed" : ""
        }`}
        id="navbar"
      >
        <div className="logoBox">
          <img src={image} alt="" className="imageNav" />
        </div>
        <div className="barsNav" onClick={handleShowNavbar}>
          <FaBars style={{ fontSize: "1.5em" }} />
        </div>
        <br />
        <br />
        <Link to="/" className="headingNav">
          Home
        </Link>
        {/* <Link to="/admissions" className="headingNav">
            Admissions
          </Link> */}
        {/* <Link to="/" className="headingNav">
            Results
          </Link>
          <Link to="/" className="headingNav">
            Gallery
          </Link> */}
        {/* <Link to="/about" className="headingNav">
            About us
          </Link> */}
        <Link to="/blogs" className="headingNav">
          Blogs
        </Link>
        {(isAdmin || isStudent) && (
          <Link to="/notice" className="headingNav">
            Notice
          </Link>
        )}
        {isAdmin && (
          <Link to="/uploadnotice" className="headingNav">
            Notice Upload
          </Link>
        )}
        {isAdmin && (
          <Link to="/approveblog" className="headingNav">
            Manage Blogs
          </Link>
        )}
        {isAdmin && (
          <Link to="/approvepayment" className="headingNav">
            Approve Payment
          </Link>
        )}
        {isStudent && (
          <Link to="/mtspage" className="headingNav">
            MTS
          </Link>
        )}
        {!isStudent && !isAdmin && (
          <Link to="/login" className="headingNav">
            Student
          </Link>
        )}
        {!isStudent && !isAdmin && (
          <Link to="/admin" className="headingNav">
            Admin
          </Link>
        )}
        {(isAdmin || isStudent) && (
          <div className="headingNav" onClick={logoutHandler}>
            Logout
          </div>
        )}
        <div className="linkRight">
          <img src={mts} alt="" className="imageNav2" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
