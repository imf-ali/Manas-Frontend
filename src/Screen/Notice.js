import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/AuthContext";
import { Card } from "../UI/Card";

const Notice = () => {
  const { manasInstance } = useContext(AuthContext);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getNotice();
      if (res.data) setNotices(res.data.allNotice);
    };
    getData();
  }, [manasInstance]);

  return (
    <>
      {notices.map((notice, index) => {
        return (
          <Card key={index} title={notice.heading} subtitle={notice.data} />
        );
      })}
    </>
  );
};

export default Notice;
