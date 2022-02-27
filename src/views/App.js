import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import HomeComponent from "./example/HomeComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/**
 * Component giup chia cac ui thanh cac khoi doc lap co the tai su dung
 * @returns
 */

/**
 * 2 components: class component/ function component(function, arrow)
 * JSX
 * stateful la co state: class component
 * stateLess la khong co state: function component
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
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />

          {/* <MyComponent /> */}

          {/* List Todo App With ReactJS */}
          {/* <ListToDo /> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* dung / thi pha them tu khoa exact thi chi khi nao click chinh xac vao component co / thi no moi chuyen den component co chua ndung / */}
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
        </header>

        {/* them thu vien yarn add react-toastify */}
        {/* them dinh dang popup notification */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;
