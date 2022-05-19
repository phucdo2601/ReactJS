import React, { useState, useRef } from "react";
import { Row, Col, Label, Button } from "reactstrap";
import * as XLSX from "xlsx/xlsx.mjs";

const ExcelImportTool = (props) => {
  const [file, setFile] = useState(null);

  const [fileName, setFileName] = useState(null);

  const [sheetNames, setSheetNames] = useState([]);

  /**
   * {
   *    "Sheet1": {},
   *    "Sheet2":{}
   * }
   */
  const [sheetData, setSheetData] = useState({});

  const fileRef = useRef();

  const acceptableFileName = ["xlsx", "xls", "csv"];

  //File.extension
  /**
   * File.File1.extension
   */
  const checkFileName = (name) => {
    return acceptableFileName.includes(name.split(".").pop().toLowerCase());
  };

  /**
   * Function read data from excel
   */
  const readDataFromExcel = (data) => {
    const wb = XLSX.read(data);

    setSheetNames(wb.SheetNames);

    var mySheetData = {};

    /**
     * Loop through the sheet
     * Assign DATA From sheet Into Object
     */
    for (var i = 0; i < wb.SheetNames.length; i++) {
      let sheetName = wb.SheetNames[i];

      const workSheet = wb.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(workSheet, {
        blankrows: "",
        header: 1,
      });

      mySheetData[sheetName] = jsonData;

      console.log("Sheet Name:", sheetName);
    }

    setSheetData(mySheetData);
    console.log(mySheetData);
    console.log(wb);

    return mySheetData;
  };

  const handleFile = async (e) => {
    // console.log(e);
    const myFile = e.target.files[0];
    if (!myFile) {
      return;
    }

    if (!checkFileName(myFile.name)) {
      alert("Invalid File Type");
      return;
    }

    /**
     * Read the XLSX MetaData
     */
    const data = await myFile.arrayBuffer();

    const mySheetData = readDataFromExcel(data);

    /**
     * Assign the sheets
     */

    setFile(myFile);

    setFileName(myFile.name);

    props.onFileUploaded(mySheetData);
  };

  const handleRemove = () => {
    setFile(null);
    setFileName(null);
    setSheetNames([]);
    setSheetData(null);

    props.onFileUploaded(null);
    fileRef.current.value = "";
  };

  return (
    <>
      <Row>
        <Col>
          <div className="mb-2">
            {fileName && <Label>File Name: {fileName}</Label>}
            {!fileName && <Label>Please Upload a file</Label>}
          </div>

          <div className="">
            <input
              type="file"
              accept="xlsx, xls, csv"
              className=""
              multiple={false}
              onChange={(e) => handleFile(e)}
              ref={fileRef}
            />

            {fileName && <Button onClick={handleRemove}>Cancel</Button>}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ExcelImportTool;
