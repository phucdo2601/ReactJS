import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import NavbarComp from "./Navbars/NavbarComp";
const ParseExcel = () => {
  const [fileName, setFileName] = useState(null);
  const [columns, setColumns] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    setFileName(file.name);
    const data = await file.arrayBuffer();
    const workBook = XLSX.readFile(data, { sheetRows: 5 });

    const worksheet = workBook.Sheets[workBook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });

    setColumns(jsonData[0]);

    console.log(jsonData);
  };

  return (
    <>
      <NavbarComp />
      <div>
        <h1>Parse Excel</h1>
        {fileName && (
          <React.Fragment>
            <p>
              FileName: <span>{fileName}</span>
            </p>

            <p>
              Column:
              <select>
                {columns.map((column) => (
                  <option value={column}>{column}</option>
                ))}
              </select>
            </p>
          </React.Fragment>
        )}
        <input type="file" onChange={(e) => handleFileChange(e)} />
      </div>
    </>
  );
};

export default ParseExcel;
