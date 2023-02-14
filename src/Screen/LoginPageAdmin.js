import React, { useReducer, useContext } from "react";
import styles from "./LoginPage.module.css";
import Input from "../UI/Input";
import AuthContext from "../store/AuthContext";
import userStore from "../store/userStore";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    console.log(actions.input.name,actions.input.value)
    return { ...state, [actions.input.name] : actions.input.value };
  }
  return { ...state };
};

const LoginPageAdmin = () => {
  const setIsLogin = userStore((state) => state.setIsLogin);

  const { manasInstance } = useContext(AuthContext);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    email: '',
    password: '',
  })

  const inputChangeHandler = (e) => {
    dispatchInput({ type: 'INPUT_CHANGE', input: e.target })
    console.log(inputValue);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await manasInstance.loginHandler(inputValue.email, inputValue.password,'admin');
    if (res.status === 201) {
      setIsLogin(true, false);
    }
  };
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginContainer} id="container">
        <h2 className={styles.headingStudent}>Admin Panel</h2>
        <div className={styles.formContainer}>
          <form className={styles.login} onSubmit={submitHandler}>
            <Input
              id="email"
              type="email"
              name="email"
              label="E-Mail"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPageAdmin;
