import { useContext, useEffect, useState, useReducer } from "react";
import AuthContext from "../store/AuthContext";
import { NewCard } from "../UI/NewCard";
import Input from "../UI/Input";
import styles from "../Screen/Blog.module.css";
import UploadBlog from "./UploadBlog";
import BlogForm from "../Components/BlogForm";

const Blog = () => {
  const { manasInstance } = useContext(AuthContext);
  const [blog, setBlog] = useState([]);
  const [upload, setUpload] = useState(false);
  const [inputObj, setInputObj] = useState({});

  const submitHandler = async (inputValue) => {
    setInputObj(inputValue);
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
  //   return (
  //     <div>
  //       <form onSubmit={submitHandler}>
  //         <Input
  //           id="name"
  //           type="text"
  //           name="name"
  //           label="Name"
  //           onChange={inputChangeHandler}
  //           value={inputValue.name}
  //         />
  //         <Input
  //           id="email"
  //           type="email"
  //           name="email"
  //           label="Email"
  //           onChange={inputChangeHandler}
  //           value={inputValue.email}
  //         />
  //         <Input
  //           id="phone"
  //           type="text"
  //           name="number"
  //           label="Phone Number"
  //           onChange={inputChangeHandler}
  //           value={inputValue.phone}
  //         />
  //         <button className={styles.blogButton}>UPLOAD BLOG</button>
  //       </form>
  //     </div>
  //   );
  // };

  const backHandler = () => {
    setUpload(false);
  };

  return (
    <div className={styles.mainDiv}>
      {!upload && (
        <div className={styles.blogDiv}>
          {blog.map((notice, index) => {
            return (
              <NewCard
                key={index}
                id={notice._id}
                title={notice.name}
                subtitle={notice.data}
                heading={notice.heading}
              />
            );
          })}
        </div>
      )}
      {!upload && (
        <div className={styles.blogForm}>
          <BlogForm submitHandler={submitHandler} />
        </div>
      )}
      {upload && <UploadBlog inputObj={inputObj} backHandler={backHandler} />}
    </div>
  );
};

export default Blog;
