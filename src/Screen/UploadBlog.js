import Editor from "../UI/Editor";
import styles from '../Screen/UploadBlog.module.css';
import AuthContext from "../store/AuthContext";
import { useContext } from "react";

const UploadBlog = ({ inputObj, backHandler }) => {

  const { manasInstance } = useContext(AuthContext);

  const goBackHandler = () => {
    backHandler();
  }

  const submitBlogHandler = async (text) => {
    const res = await manasInstance.submitBlog(inputObj.name, text);
    if (res.status === 200) {
      backHandler();
    }
  }

  return (
    <div className={styles.mainDiv}>
      <Editor submitBlogHandler={submitBlogHandler} />
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  );
};

export default UploadBlog;