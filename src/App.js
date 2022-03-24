import logo from "./logo.svg";
import "./App.css";
import NavbarScreen from "./Pages/NavbarScreen";
import ToasterScreen from "./Pages/ToasterScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestChangePage from "./Pages/TestChangePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarScreen />
                <ToasterScreen />
              </>
            }
          />

          <Route
            path="/testPage"
            element={
              <>
                <TestChangePage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
