import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";

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
  let [name, setName] = useState("Eric"); //[a1, b1, c1,...]
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "test-01",
    },
    {
      id: "todo2",
      title: "test-02",
    },
    {
      id: "todo3",
      title: "test-03",
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
      id: "abc",
      title: address,
    };
    setTodos([...todos, newTodo]);
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  /**
   * Huong dan su dung useState in Reactjs-Hook:
   * re-render
   */

  return (
    <div className="App">
      {/* Chi dung <Nav></Nav> Khi va chi khi muon chuyen noi dung co comp dc goi */}
      {/* su dung map de lap => tra ve mot array moi, khong bi anh huong den dl ma minh lap */}
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World By {name} !</p>

        <div className="todos-container">
          {todos.map((todo) => {
            console.log(">>>check todo: ", todo);
            return (
              // can dat key de nang cao hieu nang reactjs, va bat su kien
              <li className="todo-child" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </div>

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
      </header>
    </div>
  );
};

export default App;
