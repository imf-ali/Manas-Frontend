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

function App() {
  const setIsLogin = userStore((state) => state.setIsLogin);
  const setIsPaid = userStore(state => state.setIsPaid);

  const manasInstance = new ManasInstance(process.env.REACT_APP_BACKEND_URL);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const id = localStorage.getItem('userId');
    const isPaid = localStorage.getItem('isPaid');
    setIsPaid(isPaid);
    if(localStorage.getItem('token')){
      if(user === 'admin')
        setIsLogin(true, false, id);
      else if (user === 'student')
        setIsLogin(false, true, id);
    }
  },[setIsLogin, setIsPaid])

  return (
    <AuthContextProvider value={{ manasInstance }}>
      <Router>
        <NavBar />
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/uploadnotice" element={<NoticeUpload />} />
            <Route path="/mtspage" element={<MTSpage />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
