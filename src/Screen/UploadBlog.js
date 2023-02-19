import Editor from "../UI/Editor";
import styles from '../Screen/UploadBlog.module.css';
import AuthContext from "../store/AuthContext";
import { useContext } from "react";

const UploadBlog = ({ inputObj, backHandler }) => {

  const { manasInstance } = useContext(AuthContext);

  const goBackHandler = () => {
    backHandler();
  }

  const submitBlogHandler = async (text,heading) => {
    const res = await manasInstance.submitBlog(inputObj.name, text, heading);
    if (res.status === 200) {
      backHandler();
    }
  }

  return (
    <div className={styles.mainDiv}>
      <Editor name={inputObj.name} submitBlogHandler={submitBlogHandler} />
      <button className={styles.goBack} onClick={goBackHandler}>Go Back</button>
    </div>
  );
};

export default UploadBlog;