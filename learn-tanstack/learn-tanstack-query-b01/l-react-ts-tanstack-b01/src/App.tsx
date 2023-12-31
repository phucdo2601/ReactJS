import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:8083/todos`).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);
  // return <>{JSON.stringify(data)}</>;

  return (
    <>
      <Todo />
    </>
  );
};

export default App;
