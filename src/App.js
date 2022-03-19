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

  //dinh nghia ham trong function component in react_js

  const handleEventClick = (event) => {
    //set lai gia tri trong ham cua state
    setName(address);
    console.log(address);
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
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World By {name} !</p>

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
