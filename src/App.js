import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Screen/Dashboard";
import Admissions from "./Screen/Admissions";
import About from "./Screen/About";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
