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
    if (scrollTop > 80) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  const logoutHandler = async () => {
    const user = localStorage.getItem("user");
    const res = await manasInstance.logoutHandler(user);
    setShowNavbar(false);
    if (res.status === 200) {
      setIsLogin(false, false, undefined);
      navigate("/");
    }
  };
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <nav
        className={`${showNavbar ? "navbar responsiveNav" : "navbar"} ${
          hasScrolled ? "navbar-fixed" : ""
        }`}
        id="navbar"
      >
        <div
          className="logoBox"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={image} alt="" className="imageNav" />
        </div>
        <div className="barsNav" onClick={handleShowNavbar}>
          <FaBars style={{ fontSize: "1.5em" }} />
        </div>
        <div className={`${showNavbar ? "" : "nav-links"}`}>
          <Link to="/" className="headingNav" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/about" className="headingNav" onClick={closeNavbar}>
            About us
          </Link>
          <Link to="/admissions" className="headingNav" onClick={closeNavbar}>
            Admissions
          </Link>
          {/* <Link to="/" className="headingNav">
            Results
          </Link>
          <Link to="/" className="headingNav">
            Gallery
          </Link> */}
          <Link to="/blogs" className="headingNav" onClick={closeNavbar}>
            Blogs
          </Link>
          {/* {(isAdmin || isStudent) && (
          <Link to="/notice" className="headingNav">
            Notice
          </Link>
        )} */}
          {isAdmin && (
            <Link
              to="/uploadnotice"
              className="headingNav"
              onClick={closeNavbar}
            >
              Notice Upload
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/approveblog"
              className="headingNav"
              onClick={closeNavbar}
            >
              Manage Blogs
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/approvepayment"
              className="headingNav"
              onClick={closeNavbar}
            >
              Approve Payment
            </Link>
          )}
          {/* <div
          className="headingNav adminDrop"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          Admin
        </div>
        <div
          className={`${
            showDropdown ? "adminDropdownShow" : "adminDropdownHide"
          }`}
        >
          <ul>
            <li>
              {isAdmin && (
                <Link to="/uploadnotice" className="headingNav">
                  Notice Upload
                </Link>
              )}
            </li>
            <li>
              {isAdmin && (
                <Link to="/approveblog" className="headingNav">
                  Manage Blogs
                </Link>
              )}
            </li>
            <li>
              {isAdmin && (
                <Link to="/approvepayment" className="headingNav">
                  Approve Payment
                </Link>
              )}
            </li>
          </ul>
        </div> */}

          {isStudent && (
            <Link to="/mtspage" className="headingNav" onClick={closeNavbar}>
              MTS
            </Link>
          )}
          {!isStudent && !isAdmin && (
            <Link to="/login" className="headingNav" onClick={closeNavbar}>
              Student
            </Link>
          )}
          {!isStudent && !isAdmin && (
            <Link to="/admin" className="headingNav" onClick={closeNavbar}>
              Admin
            </Link>
          )}
          {(isAdmin || isStudent) && (
            <div className="headingNav" onClick={logoutHandler}>
              Logout
            </div>
          )}
        </div>
        <div className="linkRight">
          <img src={mts} alt="" className="imageNav2" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
