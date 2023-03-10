import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../store/AuthContext";
import styles from "./NoticeUpload.module.css";

const NoticeUpload = () => {
  // const headingRef = useRef(null);
  // const textRef = useRef(null);
  const noticeRef = useRef(null);
  const { manasInstance } = useContext(AuthContext);
  const [allNotice, setAllNotice] = useState([]);
  const [stateChange, setStateChange] = useState(true);

  // const noticeSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const res = manasInstance.submitNotice(
  //     headingRef.current.value,
  //     textRef.current.value
  //   );
  // };

  const mainNoticeSubmitHandler = async (e) => {
    e.preventDefault();
    await manasInstance.submitMainNotice(noticeRef.current.value);
    setStateChange(true);
    // console.log(res.data);
  }

  // const UploadNoticeForm = () => {
  //   return (
  //     <form className={styles.noticeUploadForm} onSubmit={noticeSubmitHandler}>
  //       <div className={styles.uploadHeading}>
  //         <label>Notice Heading</label>
  //         <input type="text" ref={headingRef} />
  //       </div>
  //       <div className={styles.uploadContent}>
  //         <label>Content</label>
  //         <textarea ref={textRef} />
  //       </div>
  //       <button>Add notice</button>
  //     </form>
  //   );
  // };

  const UploadNoticeToHome = () => {
    return (
      <form className={styles.noticeUploadForm} onSubmit={mainNoticeSubmitHandler}>
        <div className={styles.uploadHeading}>
          <label>New Notice</label>
          <input type="text" ref={noticeRef} />
        </div>
        <button>Add notice to home</button>
      </form>
    );
  };

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getAllNotice();
      if (res.data) setAllNotice(res.data.allNotice.reverse());
      setStateChange(false);
    };
    if (stateChange) getData();
  }, [manasInstance, stateChange]);

  const showNoticeHandler = async (noticeId, show) => {
    const res = await manasInstance.showNotice(noticeId, show);
    setStateChange(true);
    console.log(res);
  };

  const deleteNoticeHandler = async (noticeId) => {
    const res = await manasInstance.deleteNotice(noticeId);
    setStateChange(true);
    console.log(res);
  };

  const showAllNotice = () => {
    return (
      <>
        {allNotice.map((notice, index) => (
          <div key={index}>
            <div className={styles.noticeCard}>
              {/* {!notice.data && <h2>Main notice</h2>} */}
              <div className={styles.cardLeft}>
                <div className={styles.noticeHeading}>{notice.heading}</div>
                <div className={styles.noticeData}>{notice.data}</div>
              </div>
              <div className={styles.cardRight}>
                <button
                  className={styles.show}
                  disabled={notice.show}
                  onClick={() => {
                    showNoticeHandler(notice._id, true);
                  }}
                >
                  SHOW NOTICE
                </button>
                <button
                  className={styles.hide}
                  disabled={!notice.show}
                  onClick={() => {
                    showNoticeHandler(notice._id, false);
                  }}
                >
                  HIDE NOTICE
                </button>
                <button
                  className={styles.delete}
                  onClick={() => {
                    deleteNoticeHandler(notice._id);
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

  return (
    <div>
      {/* <UploadNoticeForm /> */}
      <UploadNoticeToHome />
      {showAllNotice()}
    </div>
  );
};

export default NoticeUpload;
