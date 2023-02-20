import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import styles from "./ApproveBlog.module.css";

const ApproveBlog = () => {
  const { manasInstance } = useContext(AuthContext);
  const [allBlogs, setAllBlogs] = useState([]);
  const [stateChange, setStateChange] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getAllBlogs();
      if (res.data) setAllBlogs(res.data.blog);
      setStateChange(false);
    };
    if (stateChange) getData();
  }, [manasInstance, stateChange]);

  const showBlogHandler = async (noticeId, show) => {
    const res = await manasInstance.showBlog(noticeId, show);
    if (res.data) setStateChange(true);
  };

  const deleteBlogHandler = async (noticeId) => {
    const res = await manasInstance.deleteBlog(noticeId);
    if (res.data) setStateChange(true);
  };

  const showAllNotice = () => {
    return (
      <>
        {allBlogs.map((notice, index) => (
          <div key={index}>
            <div className={styles.noticeCard}>
              <div className={styles.cardLeft}>
                <div className={styles.noticeHeading}>{notice.name}</div>
                <div
                  className={styles.noticeData}
                  dangerouslySetInnerHTML={{ __html: notice.data }}
                />
              </div>
              <div className={styles.cardRight}>
                <button
                  className={styles.show}
                  disabled={notice.show}
                  onClick={() => {
                    showBlogHandler(notice._id, true);
                  }}
                >
                  APPROVE
                </button>
                <button
                  className={styles.hide}
                  disabled={!notice.show}
                  onClick={() => {
                    showBlogHandler(notice._id, false);
                  }}
                >
                  REJECT
                </button>
                <button
                  className={styles.delete}
                  onClick={() => {
                    deleteBlogHandler(notice._id);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return <div>{showAllNotice()}</div>;
};

export default ApproveBlog;
