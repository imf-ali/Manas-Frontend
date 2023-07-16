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
import ApprovePayment from "./Screen/ApprovePayment";
import { GoogleOAuthProvider } from '@react-oauth/google';

const backendUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:9007"
    : "https://manas-api.onrender.com";

function App() {
  const setIsLogin = userStore((state) => state.setIsLogin);

  const manasInstance = new ManasInstance(backendUrl);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const id = localStorage.getItem("userId");
    if (localStorage.getItem("token")) {
      if (user === "admin") setIsLogin(true, false, id);
      else if (user === "student") setIsLogin(false, true, id);
    }
  }, [setIsLogin]);

  return (
    <GoogleOAuthProvider clientId="338277030676-4vv7ej7qd4a4980qlqmonemtnk2p4cat.apps.googleusercontent.com">
      <AuthContextProvider value={{ manasInstance }}>
        <Router>
          <Header />
          <NavBar />
          <div className={styles.App}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Admissions />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<LoginPageAdmin />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/uploadnotice" element={<NoticeUpload />} />
              <Route path="/mtspage" element={<MTSpage />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/:blogid" element={<BlogPage />} />
              <Route path="/approveblog" element={<ApproveBlog />} />
              <Route path="/approvepayment" element={<ApprovePayment />} />
            </Routes>
          </div>
        </Router>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
