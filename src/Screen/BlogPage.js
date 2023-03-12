import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../Components/BlogForm";
import AuthContext from "../store/AuthContext";
import UploadBlog from "./UploadBlog";
import styles from "./BlogPage.module.css";
import image from "../resource/displayPic/manasHand.jpeg";

const BlogPage = () => {
  const { manasInstance } = useContext(AuthContext);
  const { blogid } = useParams();

  const [blog, setBlog] = useState({});

  const [upload, setUpload] = useState(false);
  const [inputObj, setInputObj] = useState({});

  const submitHandler = async (inputValue) => {
    setInputObj(inputValue);
    setUpload(true);
  };

  const backHandler = () => {
    setUpload(false);
  };

  useEffect(() => {
    const loadBlog = async () => {
      const res = await manasInstance.getApprovedBlogById(blogid);
      setBlog(res.data.blog);
    };
    loadBlog();
  }, [blogid, manasInstance]);

  return (
    <div className={styles.mainDiv}>
      {!upload && (
        <div className={styles.blogpart}>
          <h2>{blog.heading}</h2>
          <img src={image} alt=" " className={styles.image} />
          <span dangerouslySetInnerHTML={{ __html: blog.data }}></span>
        </div>
      )}
      {!upload && (
        <div className={styles.blogform}>
          <BlogForm submitHandler={submitHandler} />
        </div>
      )}
      {upload && <UploadBlog inputObj={inputObj} backHandler={backHandler} />}
    </div>
  );
};

export default BlogPage;
