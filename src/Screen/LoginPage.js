import React, { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import Input from "../UI/Input";
import AuthContext from "../store/AuthContext";
import userStore from "../store/userStore";
import { useGoogleLogin } from "@react-oauth/google";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    return { ...state, [actions.input.name]: actions.input.value };
  }
  return { ...state };
};

const LoginPage = () => {
  const setIsLogin = userStore((state) => state.setIsLogin);
  const setIsPaid = userStore((state) => state.setIsPaid);
  const { manasInstance } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const res = await manasInstance.loginViaGoogle(
        "student",
        codeResponse.access_token
      );
      if (res.status === 201) {
        setIsLogin(false, true, res.data.user._id);
        setIsPaid(res.data.user.isPaymentDone);
        navigate("/");
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const signup = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const res = await manasInstance.signUpHandler({
        googleAccessToken: codeResponse.access_token,
      });
      if (res.status === 201) {
        setIsLogin(false, true, res.data.user._id);
        setIsPaid(res.data.user.isPaymentDone);
        navigate("/");
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputChangeHandler = (e) => {
    dispatchInput({ type: "INPUT_CHANGE", input: e.target });
  };

  const submitHandler = async (event, signup) => {
    event.preventDefault();
    if (!signup) {
      const res = await manasInstance.loginHandler(
        inputValue.email,
        inputValue.password,
        "student"
      );
      if (res.status === 201) {
        setIsLogin(false, true, res.data.user._id);
        setIsPaid(res.data.user.isPaymentDone);
        navigate("/");
      }
    } else {
      const res = await manasInstance.signUpHandler(inputValue);
      if (res.status === 201) {
        setIsLogin(false, true, res.data.user._id);
        setIsPaid(res.data.user.isPaymentDone);
        navigate("/");
      }
    }
  };

  const switchSignUp = () => {
    document.getElementById("studentLogin").style.left = "121%";
    document.getElementById("studentSign").style.left = "0%";
    document.getElementById("btn").style.left = "50%";
    document.getElementById("container").style.height = "90%";
  };
  const switchLogin = () => {
    document.getElementById("studentLogin").style.left = "0";
    document.getElementById("studentSign").style.left = "-121%";
    document.getElementById("btn").style.left = "0%";
    document.getElementById("container").style.height = "60%";
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginContainer} id="container">
        <h2 className={styles.headingStudent}>Student Panel</h2>
        <div className={styles.toggle}>
          <div id="btn" className={styles.btn}></div>
          <button onClick={switchLogin}>Login</button>
          {/* <hr></hr> */}
          <button onClick={switchSignUp}>Register</button>
        </div>
        <div className={styles.formContainer}>
          <form
            id="studentLogin"
            className={styles.loginFormAdmin}
            onSubmit={(e) => submitHandler(e, false)}
          >
            <Input
              id="email"
              type="email"
              name="email"
              label="E-Mail Student"
              onChange={inputChangeHandler}
              value={inputValue.email}
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              onChange={inputChangeHandler}
              value={inputValue.password}
            />
            {/* <Input
              className={styles.radio}
              id="radio"
              type="checkbox"
              label="Admin"
              onChange={adminChangeHandler}
            /> */}
            <button className={styles.loginButton}>Submit</button>
            <button onClick={() => login()} className={styles.googleSign}>Sign in with Google 🚀 </button>
          </form>
          <form
            id="studentSign"
            className={styles.signFormAdmin}
            onSubmit={(e) => submitHandler(e, true)}
          >
            <Input
              id="firstName"
              type="firstName"
              name="firstname"
              label="First Name"
              onChange={inputChangeHandler}
              value={inputValue.firstname}
            />
            <Input
              id="lastName"
              type="lastName"
              name="lastname"
              label="Last Name"
              onChange={inputChangeHandler}
              value={inputValue.lastname}
            />
            <Input
              id="email"
              type="email"
              name="email"
              label="E-Mail Student Sign"
              onChange={inputChangeHandler}
              value={inputValue.email}
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              onChange={inputChangeHandler}
              value={inputValue.password}
            />
            <Input
              id="confirmPassword"
              type="confirmPassword"
              name="confirmpassword"
              label="Confirm Password"
              onChange={inputChangeHandler}
              value={inputValue.confirmpassword}
            />
            {/* <Input
              className={styles.radio}
              id="radio"
              type="checkbox"
              label="Admin"
              onChange={adminChangeHandler}
            /> */}
            <button className={styles.loginButton}>Submit</button>
            <button onClick={() => signup()} className={styles.googleSign}>
              Sign in with Google 🚀{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
