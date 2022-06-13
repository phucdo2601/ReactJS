import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ParseExcel from "./Components/ParseExcel";
import ReadExcel from "./Components/ReadExcel/ReadExcel";
import ExportExcel from "./Components/ExportExcel/ExportExcel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parse-excel" element={<ParseExcel />} />
        <Route path="/read-excel" element={<ReadExcel />} />
        <Route path="/export-excel" element={<ExportExcel />} />
      </Routes>
    </>
  );
}

export default App;
