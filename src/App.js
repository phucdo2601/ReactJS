import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import { Link, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* tu react-router-v6, routes thay doi cho switch, giup chuyen doi cac component,
        - TAO ra co che dinh tuyen noi bo
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
