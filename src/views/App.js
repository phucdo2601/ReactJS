import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';

/**
 * Component giup chia cac ui thanh cac khoi doc lap co the tai su dung
 * @returns 
 */

/**
 * 2 components: class component/ function component(function, arrow)
 * 
 * 
 * @returns 
 */

/**
 * Basic function: ex: function nameFunc() {.... code ....}
 * @returns 
 */

/**
 * arrow function: ex: const  nameFunc =() =>{....code....}
 * 
 * @returns 
 */

//arrow
const App = () => {
  //khi return la mot ham xu ly giao dien
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with react!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
