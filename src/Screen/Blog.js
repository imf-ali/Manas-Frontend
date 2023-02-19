import { useContext, useEffect, useState, useReducer } from "react";
import AuthContext from "../store/AuthContext";
import { NewCard } from "../UI/NewCard";
import Input from "../UI/Input";
import styles from "../Screen/Blog.module.css";
import UploadBlog from "./UploadBlog";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    console.log(actions.input.name, actions.input.value);
    return { ...state, [actions.input.name]: actions.input.value };
  }
  return { ...state };
};

const Blog = () => {
  const { manasInstance } = useContext(AuthContext);
  const [blog, setBlog] = useState([]);
  const [upload, setUpload] = useState(false);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    name: "",
    email: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    dispatchInput({ type: "INPUT_CHANGE", input: e.target });
    console.log(inputValue);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setUpload(true);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getApprovedBlogs();
      console.log(res.data);
      if (res.data) setBlog(res.data.blog);
    };
    getData();
  }, [manasInstance]);

  const BlogForm = () => {
    return (
      <div>
        <form onSubmit={submitHandler}>
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

  const backHandler = () => {
    setUpload(false);
  };

  return (
    <div className={styles.mainDiv}>
      {!upload && (
        <div className={styles.blogDiv}>
          {blog.map((notice, index) => {
            return (
              <NewCard key={index} title={notice.name} subtitle={notice.data} heading={notice.heading} />
            );
          })}
        </div>
      )}
      {!upload && (
        <div className={styles.blogForm}>
          <BlogForm />
        </div>
      )}
      {upload && <UploadBlog inputObj={inputValue} backHandler={backHandler} />}
    </div>
  );
};

export default Blog;
