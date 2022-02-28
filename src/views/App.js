import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import HomeComponent from "./example/HomeComponent";
import ListUser from "./Users/ListUser";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import DetailUser from "./Users/DetailUser";

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
          {/* dung / thi pha them tu khoa exact thi chi khi nao click chinh xac vao component co / thi no moi chuyen den component co chua ndung / */}
          <Switch>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>

          {/* Routes nay la cua react-router-dom phien ban 6 : v6.2.1: 
                npm i react-router-dom
                o phien ban nay chua ho tro withRoute
            */}
          {/* <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes> */}
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
