import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../store/AuthContext";
import { Card } from '../UI/Card';

const NoticeUpload = () => {

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const { manasInstance } = useContext(AuthContext);
  const [ allNotice, setAllNotice ] = useState([]);
  const [ stateChange, setStateChange] = useState(true);

  const noticeSubmitHandler = () => {
    const res = manasInstance.submitNotice(headingRef.current.value, textRef.current.value);
    console.log(res);
  }

  const UploadNoticeForm = () =>{
    return (
      <form onSubmit={noticeSubmitHandler}>
        <label>Notice Heading</label>
        <input type="text" ref={headingRef} />
        <label>Content</label>
        <textarea ref={textRef} />
        <button>Add notice</button>
      </form>
    )
  }

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getAllNotice();
      if(res.data)
        setAllNotice(res.data.allNotice);
      setStateChange(false);
    }
    if(stateChange)
      getData();
  },[manasInstance, stateChange])

  const showNoticeHandler = async (noticeId, show) =>{
    const res = await manasInstance.showNotice(noticeId, show);
    setStateChange(true);
    console.log(res);
  }

  const deleteNoticeHandler = async (noticeId) =>{
    const res = await manasInstance.deleteNotice(noticeId);
    setStateChange(true);
    console.log(res);
  }

  const showAllNotice = () => {
    return (
      <>
        {allNotice.map((notice, index) => (
          <div key={index}>
            <Card
              title={notice.heading}
              subtitle={notice.data}
            />
            <button disabled={notice.show} onClick={() => {
              showNoticeHandler(notice._id, true)
            }}>
              SHOW NOTICE
            </button>
            <button disabled={!notice.show} onClick={() => {
              showNoticeHandler(notice._id, false)
            }}>
              HIDE NOTICE
            </button>
            <button onClick={() => {
              deleteNoticeHandler(notice._id)
            }}>
              DELETE
            </button>
          </div>
        ))}
      </>
    )
  } 

  return (
    <div>
      <UploadNoticeForm />
      {showAllNotice()}
    </div>
  )
};

export default NoticeUpload;