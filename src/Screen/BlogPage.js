import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const BlogPage = () => {

  const { manasInstance } = useContext(AuthContext);
  const { blogid } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const loadBlog = async () => {
      const res = await manasInstance.getApprovedBlogById(blogid);
      setBlog(res.data.blog);
    }
    loadBlog();
  },[]);

  return (
    <div>
      <h2>{blog.heading}</h2>
      <span dangerouslySetInnerHTML={{__html: blog.data}}></span>
    </div>
  )
};

export default BlogPage;