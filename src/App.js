import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Covid from "./components/Covid";
/**
 * ben component can import cai comp export nhieu cai them dau {} o ben ngoai
 */
import { Countdown } from "./components/Countdown";
import CountDownByHook from "./components/CountDownByHook";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import DetailBlog from "./components/DetailBlog";
import AddNewBlog from "./components/AddNewBlog";

/**
 * Cai dat mot thu vien voi version xac dinh bang npm:
 * npm install --save nameLib@ver
 */
/**
 * Mot component bao gom:
 * template +logic
 * Doi voi create se co them JSX
 * babel
 */

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World By PhucDN!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/**
 * Arrow function of js
 * @returns
 */
const App = () => {
  /**
   * Viet code logic thi nen viet o tren return()
   *
   */

  // let name = "PhucDn";

  /**
   * useState trong reactjs-hook:
   * ban chat ham useState("Eric") se tra ra mot array, phan tu dau tien la ten bien, phan tu tiep theo la function xu ly
   * lay phan tu tuan tu theo thu tu
   * const la hang so, khong thay doi dc gia tri
   */
  let [name, setName] = useState("Phuc Dn"); //[a1, b1, c1,...]
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "test-01",
      type: "phucdn-test",
    },
    {
      id: "todo2",
      title: "test-02",
      type: "type-t-02",
    },
    {
      id: "todo3",
      title: "test-03",
      type: "phucdn-test",
    },
    {
      id: "todo4",
      title: "test-04",
      type: "type-t-04",
    },
  ]);

  //dinh nghia ham trong function component in react_js

  const handleEventClick = (event) => {
    if (!address) {
      alert("The input field is blank! Please fill the input");
      return;
    }
    //set lai gia tri trong ham cua state
    // setName(address);
    // console.log(address);
    /**
     * hook not merge state
     */
    /**
     * ...spread syntax array js
     */
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "phucdn-test",
    };
    setTodos([...todos, newTodo]);
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    //khong the dung truc tiep bien todos cua lop cha, phai goi mot bien khac, r gan gia tri cua no
    /**
     * Props chuyen Function tu cha xuong con
     */
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  /**
   * Huong dan hoc can ban useEffect
   * ham useEffect chay khi nao: moi lan component update xong thi se chay vao ham useEffect
   *
   */
  /**
   * Huong dan su dung useEffect dependencies
   * Them mot mang sau khi khao bao su ly useEffect
   * Viec them mot mang rong dang sau [], thi ham useEffect chi chay mot lan
   *  (bang voi ham componentDidMount() trong class component)
   * them addres vao mang rong de bao hieu cho useEffect biet khi nao bien address thay doi thi moi goi toi useEffect
   *  Co the viec nhieu ham useEffect cung ko anh huong den viec chay code, giup dc clear code hon khi chay
   */
  useEffect(() => {
    // console.log("run use effect address edit text");
  }, [address]);

  useEffect(() => {
    // console.log("run use effect todos");
  }, [todos]);

  const onTimeUp = () => {
    // alert("Time Up");
  };

  const onTimeUpOfHook = () => {
    alert("Hook Component Time Up");
  };

  /**
   * Huong dan su dung useState in Reactjs-Hook:
   * re-render
   */
  return (
    <Router>
      <div className="App">
        {/* Chi dung <Nav></Nav> Khi va chi khi muon chuyen noi dung co comp dc goi */}
        {/* su dung map de lap => tra ve mot array moi, khong bi anh huong den dl ma minh lap */}

        {/**
         * props = properties => phuc vu cho viec chuyen du lieu giua cac component (Chi Chuyen du lieu tu component cha xuong con
         *    top => bottom
         * )
         */}

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Countdown onTimeUp={onTimeUp} />
          <span>--------------------------------------------------------</span>
          <CountDownByHook onTimeUpOfHook={onTimeUpOfHook} />
          <p>Hello World By {name} !</p> */}
          {/* <Todo
          myData={todos}
          title={"All to do"}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          myData={todos.filter((item) => item.type === "phucdn-test")}
          title={"phucdn-test to do"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />

        <button
          type="button"
          onClick={(event) => {
            handleEventClick(event);
          }}
        >
          Click Me
        </button> */}

          {/* <Covid /> */}
        </header>

        <Routes>
          <Route path="/" element={<Covid />} />

          <Route
            path="/timer"
            element={
              <>
                <Countdown onTimeUp={onTimeUp} />
                <span>
                  --------------------------------------------------------
                </span>
                <CountDownByHook onTimeUpOfHook={onTimeUpOfHook} />
              </>
            }
          />

          <Route
            path="/todo"
            element={
              <>
                <Todo
                  myData={todos}
                  title={"All to do"}
                  deleteDataTodo={deleteDataTodo}
                />

                <input
                  type="text"
                  value={address}
                  onChange={(event) => handleOnChangeInput(event)}
                />

                <button
                  type="button"
                  onClick={(event) => {
                    handleEventClick(event);
                  }}
                >
                  Click Me
                </button>
              </>
            }
          />

          <Route
            path="/blogs"
            element={
              <>
                <Blog />
              </>
            }
          />

          <Route
            path="/blogs/:id"
            element={
              <>
                <DetailBlog />
              </>
            }
          />

          <Route
            path="/add-new-blog"
            element={
              <>
                <AddNewBlog />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
