import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      {/* router co the ton tai a href ben trong  */}
      <Routes>
        {/* Route dung de dn cac comp chuyen giua cac component  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        {/* khi ma ten tren duong dan khong phu hop voi cac component dc dinh nghia san 
          thi no se tu dong dieu huong sang 
          <Route path="*" element={<Tu Dinh Nghia />} />
        */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
