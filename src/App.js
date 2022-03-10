import logo from "./logo.svg";
import "./App.css";

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
  let age = 22;
  let boolean = true;
  let obj = {
    name: "PhucDn",
    age: 22,
  };

  let link = "https://www.facebook.com/profile.php?id=100034519140023";

  return (
    <div className="App">
      {console.log("check obj: ", obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World By {name} and He is {obj.age}!
        </p>
        <p>{JSON.stringify(obj)}</p>
        <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my PhucDn Facebook
        </a>
      </header>
    </div>
  );
};

export default App;
