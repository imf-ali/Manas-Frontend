import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Screen/Dashboard";
import Admissions from "./Screen/Admissions";
import About from "./Screen/About";
import NavBar from "./Components/NavBar";
import LoginPage from "./Screen/LoginPage";
import NoticeUpload from "./Screen/NoticeUpload";
import { AuthContextProvider } from "./store/AuthContext";
import ManasInstance from "./lib/api";
import { useEffect } from "react";
import userStore from "./store/userStore";
import Notice from "./Screen/Notice";
import MTSpage from "./Screen/MTSpage";
import LoginPageAdmin from "./Screen/LoginPageAdmin";
import Header from "./Components/Header";
import Blog from "./Screen/Blog";
import ApproveBlog from "./Screen/ApproveBlog";
import BlogPage from "./Screen/BlogPage";

const backendUrl = process.env.NODE_ENV !== "production" ? "http://localhost" : "http://ecs-lg-1073622137.ap-south-1.elb.amazonaws.com";

function App() {
  const setIsLogin = userStore((state) => state.setIsLogin);
  const setIsPaid = userStore((state) => state.setIsPaid);

  const manasInstance = new ManasInstance(backendUrl);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const id = localStorage.getItem("userId");
    const isPaid = localStorage.getItem("isPaid");
    console.log(isPaid);
    setIsPaid(isPaid);
    if (localStorage.getItem("token")) {
      if (user === "admin") setIsLogin(true, false, id);
      else if (user === "student") setIsLogin(false, true, id);
    }
  }, [setIsLogin, setIsPaid]);

  return (
    <AuthContextProvider value={{ manasInstance }}>
      <Router>
        <Header />
        {/* <NavBar /> */}
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<LoginPageAdmin />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/uploadnotice" element={<NoticeUpload />} />
            <Route path="/mtspage" element={<MTSpage />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:blogid" element={<BlogPage />} />
            <Route path="/approveblog" element={<ApproveBlog />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
