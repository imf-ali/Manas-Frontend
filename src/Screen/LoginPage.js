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

  const { manasInstance } = useContext(AuthContext);

  const [ adminValue, setAdminValue ] = useState(false);

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
    setAdminValue((value) => !value)
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = adminValue ? 'admin' : 'student';
    const res = await manasInstance.loginHandler(emailState.value, passwordState.value, user);
    if(res.status === 201) {
      setIsLogin(true, false);
    }
  };

  return (
      <div className={styles.loginMain}>
        <div className={styles.loginContainer}>
          <h2 className={styles.headingLogin}>Log In</h2>
          <form onSubmit={submitHandler}>
            <Input
              id="email"
              type="email"
              label="E-Mail"
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
              id="radio"
              type="checkbox"
              label="Admin"
              onChange={adminChangeHandler}
            />
              <button className={styles.loginButton}>Submit</button>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
