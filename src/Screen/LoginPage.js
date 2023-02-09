import React, { useReducer, useState, useContext } from "react";
import styles from "./LoginPage.module.css";
import Input from "../UI/Input";
import AuthContext from "../store/AuthContext";
import userStore from "../store/userStore";

const emailReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: actions.val.includes("@") };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: actions.val.trim().length > 8 };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
  return { value: "", isValid: false };
};

const LoginPage = () => {
  const setIsLogin = userStore((state) => state.setIsLogin);
  const setIsPaid = userStore((state) => state.setIsPaid);

  const { manasInstance } = useContext(AuthContext);

  const [adminValue, setAdminValue] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const adminChangeHandler = () => {
    console.log(adminValue);
    setAdminValue((value) => !value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = adminValue ? 'admin' : 'student';
    const res = await manasInstance.loginHandler(emailState.value, passwordState.value, user);
    console.log(res.data);
    if(res.status === 201) {
      adminValue ? setIsLogin(true, false, res.data.user._id) : setIsLogin(false, true, res.data.user._id);
      setIsPaid(res.data.user.isPaymentDone)
    }
  };

  // const switchStudent = () => {
  //   document.getElementById("student").style.left = "0";
  //   document.getElementById("btn").style.left = "50%";
  //   document.getElementById("adminLogin").style.left = "-121%";
  // };
  // const switchAdmin = () => {
  //   document.getElementById("adminLogin").style.left = "0";
  //   document.getElementById("btn").style.left = "0%";
  //   document.getElementById("student").style.left = "121%";
  // };
  const switchSignUp = () => {
    document.getElementById("studentLogin").style.left = "121%";
    document.getElementById("studentSign").style.left = "0%";
    document.getElementById("btn").style.left = "50%";
    document.getElementById("container").style.height = "70vh";
  };
  const switchLogin = () => {
    document.getElementById("studentLogin").style.left = "0";
    document.getElementById("studentSign").style.left = "-121%";
    document.getElementById("btn").style.left = "0%";
    document.getElementById("container").style.height = "45vh";
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
            onSubmit={submitHandler}
          >
            <Input
              id="email"
              type="email"
              label="E-Mail Student"
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              value={emailState.value}
              isValid={emailState.isValid}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            {/* <Input
              className={styles.radio}
              id="radio"
              type="checkbox"
              label="Admin"
              onChange={adminChangeHandler}
            /> */}
            <button className={styles.loginButton}>Submit</button>
          </form>
          <form
            id="studentSign"
            className={styles.signFormAdmin}
            onSubmit={submitHandler}
          >
            <Input
              id="firstName"
              type="firstName"
              label="First Name"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            <Input
              id="lastName"
              type="lastName"
              label="Last Name"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            <Input
              id="email"
              type="email"
              label="E-Mail Student Sign"
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              value={emailState.value}
              isValid={emailState.isValid}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            <Input
              id="confirmPassword"
              type="confirmPassword"
              label="Confirm Password"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            {/* <Input
              className={styles.radio}
              id="radio"
              type="checkbox"
              label="Admin"
              onChange={adminChangeHandler}
            /> */}
            <button className={styles.loginButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
