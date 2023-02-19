import { useReducer } from "react";
import styles from "../Screen/Blog.module.css";
import Input from "../UI/Input";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    console.log(actions.input.name, actions.input.value);
    return { ...state, [actions.input.name]: actions.input.value };
  }
  return { ...state };
};

const BlogForm = ({ submitHandler }) => {

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    name: "",
    email: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    dispatchInput({ type: "INPUT_CHANGE", input: e.target });
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    submitHandler(inputValue);
  }

  return (
    <div>
      <form onSubmit={mySubmitHandler}>
        <Input
          id="name"
          type="text"
          name="name"
          label="Name"
          onChange={inputChangeHandler}
          value={inputValue.name}
        />
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          onChange={inputChangeHandler}
          value={inputValue.email}
        />
        <Input
          id="phone"
          type="text"
          name="number"
          label="Phone Number"
          onChange={inputChangeHandler}
          value={inputValue.phone}
        />
        <button className={styles.blogButton}>UPLOAD BLOG</button>
      </form>
    </div>
  );
}; 

export default BlogForm;