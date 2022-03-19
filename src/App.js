import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

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

  let name = "PhucDn";

  //dinh nghia ham trong function component in react_js

  const handleEventClick = (event) => {
    console.log(">>> Click me", event.target.value);
  };

  return (
    <div className="App">
      {/* Chi dung <Nav></Nav> Khi va chi khi muon chuyen noi dung co comp dc goi */}
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World By {name} !</p>

        <input
          type="text"
          value="PhucDn"
          onClick={(event) => {
            handleEventClick(event);
          }}
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
