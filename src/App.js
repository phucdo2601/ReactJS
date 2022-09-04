import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";

function App() {
  const [value, setValue] = useState(
    "LCBi / Hcbi * min ( Hcbi , Htti ) + (Task1 + Task2 + Task3)"
  );

  const [formulaBackDigit, setFormulaBackDigit] = useState("");

  const [group, setGroup] = useState(["Tất cả", "Lương", "Task", "Phụ cấp"]);

  const listPhuCap = [
    {
      name: "PC1",
      description: "Phu cap 1",
    },
    {
      name: "PC2",
      description: "Phu cap 2",
    },
    {
      name: "PC3",
      description: "Phu cap 3",
    },
  ];

  const listTask = [
    {
      name: "Task1",
      description: "Task thứ 1",
    },
    {
      name: "Task2",
      description: "Task thứ 2",
    },
    {
      name: "Task3",
      description: "Task thứ 3",
    },
  ];

  const listSal = [
    {
      name: "Htti",
      description: "Số giờ dạy thực tế của GV thứ i trong tháng",
    },
    {
      name: "Hcbi",
      description: "Số giờ định mức cơ bản của GV thứ i",
    },
    {
      name: "LCBi",
      description:
        "Lương cơ bản được xác định và ghi trên hợp đồng lao động của GV thứ i",
    },
    {
      name: "x",
      description: "Biến x",
    },
    {
      name: "y",
      description: "Biến y",
    },
  ];

  const initListFormulaAttr = [
    {
      name: "Htti",
      description: "Số giờ dạy thực tế của GV thứ i trong tháng",
    },
    {
      name: "Hcbi",
      description: "Số giờ định mức cơ bản của GV thứ i",
    },
    {
      name: "LCBi",
      description:
        "Lương cơ bản được xác định và ghi trên hợp đồng lao động của GV thứ i",
    },
    {
      name: "Task1",
      description: "Task thứ 1",
    },
    {
      name: "Task2",
      description: "Task thứ 2",
    },
    {
      name: "Task3",
      description: "Task thứ 3",
    },
    {
      name: "Min",
      description: "Return the smallest value from the numbers supplied",
    },
    {
      name: "Max",
      description: "Return the biggest value from the numbers supplied",
    },
    {
      name: "x",
      description: "Biến x",
    },
    {
      name: "y",
      description: "Biến y",
    },
    {
      name: "PC1",
      description: "Phu cap 1",
    },
    {
      name: "PC2",
      description: "Phu cap 2",
    },
    {
      name: "PC3",
      description: "Phu cap 3",
    },
  ];

  const [options, setOptions] = useState(initListFormulaAttr);

  function handleSubmit() {
    swal(
      "Create Formula Successful!",
      "This Formula is: " + value.trim(),
      "success"
    );
  }

  function checkFormula() {
    swal("Formula is OK!", "This Formula is: " + value.trim(), "success");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function addValue(event) {
    setValue(value + " " + event.target.value);
    setFormulaBackDigit(formulaBackDigit + " " + event.target.value);
  }

  const removeOneChar = (event) => {
    event.preventDefault();
    const tempFormulaStr = value;
    const lengthStr = tempFormulaStr.length;
    // const valueDelete = tempFormulaStr.slice(lengthStr - 1, lengthStr);
    const fomrAfterDelete = tempFormulaStr.slice(0, lengthStr - 1);
    setValue(fomrAfterDelete);
    setFormulaBackDigit(fomrAfterDelete);
  };

  const deleteFormula = (event) => {
    event.preventDefault();
    setValue("");
  };

  const revertFormulaDigit = (event) => {
    setValue(formulaBackDigit);
  };

  const handeChangOptFormAttr = (event) => {
    event.preventDefault();
    console.clear();
    console.log(event.target.value);

    const optVal = event.target.value;

    if (optVal === "Tất cả") {
      setOptions(initListFormulaAttr);
    } else if (optVal === "Lương") {
      setOptions(listSal);
    } else if (optVal === "Task") {
      setOptions(listTask);
    } else if (optVal === "Phụ cấp") {
      setOptions(listPhuCap);
    }
  };

  return (
    <div className="App m-5">
      <p className="fw-bold">Formula</p>
      <textarea
        className="form-control w-75 d-inline"
        id="exampleFormControlTextarea1"
        rows="3"
        value={value}
        // onChange={handleChange}
        readOnly
      ></textarea>

      <div className="d-flex align-items-center mt-2 justify-content-center">
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value="+"
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value="-"
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value="*"
        >
          *
        </button>
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value="/"
        >
          /
        </button>
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value="("
        >
          (
        </button>
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={addValue}
          value=")"
        >
          )
        </button>

        <button
          type="button"
          className="btn btn-light m-2"
          onClick={removeOneChar}
        >
          Backspace
        </button>

        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={deleteFormula}
        >
          Delete
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={revertFormulaDigit}
        >
          Revert
        </button>
      </div>

      <div className="d-flex align-items-center mt-3">
        <p className="mt-2 me-2 fw-bold">Group: </p>
        <select
          className="form-select w-25 me-2"
          aria-label="Default select example"
          onChange={handeChangOptFormAttr}
        >
          {group.map((groupName) => (
            <option key={groupName} value={groupName}>
              {groupName}
            </option>
          ))}
        </select>

        <p className="mt-2 me-2 ms-3 fw-bold">Attribute: </p>

        <select
          className="form-select"
          size="7"
          aria-label="size 3 select example"
        >
          {options.map((option) => (
            <option
              key={option.name}
              value={option.name}
              onDoubleClick={addValue}
            >
              {option.name} - {option.description}
            </option>
          ))}
        </select>
      </div>

      <p className="fst-italic">
        * Note: <br />
        + Nhấn Double Click để chọn một Attribute đưa vào Công thức <br />
        + Nút Backspace là xóa một phần tử phía dưới <br />
        + Nút Delete là xóa toàn bộ chuỗi công thức <br />
        + Nút Revert là để lấy lại chuỗi công thức nếu lỡ nhấn nút xóa <br />
      </p>
      <div className="d-flex align-items-center mt-5 justify-content-center">
        <button
          type="button"
          className="btn btn-success ms-3"
          onClick={checkFormula}
        >
          Check Formula
        </button>
        <button
          type="button"
          className="btn btn-primary ms-3"
          onClick={handleSubmit}
        >
          Submit Formula
        </button>
      </div>
    </div>
  );
}

export default App;
