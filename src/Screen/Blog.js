import { useContext, useEffect, useState, useReducer } from "react";
import AuthContext from "../store/AuthContext";
import { Card } from "../UI/Card";
import Input from "../UI/Input";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    console.log(actions.input.name,actions.input.value)
    return { ...state, [actions.input.name] : actions.input.value };
  }
  return { ...state };
};

const Blog = () => {

  const { manasInstance } = useContext(AuthContext);
  const [blog, setBlog] = useState([]);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    heading: '',
    data: '',
  })

  const inputChangeHandler = (e) => {
    dispatchInput({ type: 'INPUT_CHANGE', input: e.target })
    console.log(inputValue);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await manasInstance.submitBlog(inputValue.heading, inputValue.data);
    if (res.status === 201) {
      console.log('Blog submitted successfully');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getApprovedBlogs();
      console.log(res.data)
      if(res.data)
        setBlog(res.data.blog);
    }
    getData();
  }, [manasInstance]);

  const BlogForm = () => {
    return (
      <div>
          <form onSubmit={submitHandler}>
            <Input
              id="heading"
              type="text"
              name="heading"
              label="Heading"
              onChange={inputChangeHandler}
              value={inputValue.heading}
            />
            <Input
              id="data"
              type="text"
              name="data"
              label="Data"
              onChange={inputChangeHandler}
              value={inputValue.data}
            />
            <button>Submit</button>
          </form>
        </div>
    )
  }

  return (
    <>
      {blog.map((notice, index) => {
        return (
          <Card 
            key={index}
            title={notice.heading}
            subtitle={notice.data}
          />
        )
      })}
      <BlogForm />
    </>
  );
    
};

export default Blog;