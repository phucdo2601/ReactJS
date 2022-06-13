import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Col,
  Table,
  Input,
  Label,
  Button,
} from "reactstrap";
import { getData, getArrData } from "../../services/fakeDatas/mockData";
import * as XLSX from "xlsx/xlsx.mjs";

const ExportExcel = () => {
  const [sheetData, setSheetData] = useState(null);

  const [sheetArrData, setSheetArrData] = useState(null);

  useEffect(() => {
    setSheetData(getData());
    setSheetArrData(getArrData());
    console.log(getData());
  }, []);

  /**
   * Du lieu truyen len theo kieu nay giong nhu mot chuoi json truyen server
   */
  const handleOnExport = () => {
    // console.log(sheetData);
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyTestExportObjectJson.xls");
  };

  /**
   * Du lieu truyen len theo kieu la mot mang da chieu
   */
  const handleOnArrExport = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(sheetArrData);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyTestExportArrData.xls");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5 className="title">Export table data</h5>
                <p className="category"></p>
              </CardHeader>

              <CardBody className="all-icons">
                {sheetData && (
                  <>
                    <Row>
                      <Col md={12}>
                        <Button onClick={handleOnExport}>
                          Export from object
                        </Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <h4>Object Sheet</h4>
                        <Table bordered className="border">
                          <thead className="text-primary">
                            <tr>
                              {Object.keys(sheetData[0]).map((h) => (
                                <th key={h}>{h}</th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {sheetData.map((row) => (
                              <tr scope="row" key={row.id}>
                                {Object.keys(row).map((c, i) => (
                                  <td key={c.id + "_" + i}>{row[c]}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Button onClick={handleOnArrExport}>
                          Export from Arr Data Table
                        </Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <h4>Arr Sheet</h4>
                        <Table bordered className="border">
                          <thead className="text-primary">
                            <tr>
                              {sheetArrData[0].map((h) => (
                                <th key={h}>{h}</th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {sheetArrData.slice(1).map((row) => (
                              <>
                                <tr scope="row">
                                  {row.map((c) => (
                                    <>
                                      <td key={c}>{c}</td>
                                    </>
                                  ))}
                                </tr>
                              </>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExportExcel;
