import React from "react";
import { useTodosIds } from "../services/queries";

const Todo = () => {
  const todosIdsQuery = useTodosIds();

  if (todosIdsQuery.isPending) {
    return (
      <>
        <span>Loading...</span>
      </>
    );
  }

  if (todosIdsQuery.isError) {
    return (
      <>
        <span>there is an error</span>
      </>
    );
  }

  return (
    <>
      {todosIdsQuery.data.map((id) => (
        <>
          <p key={id}>{id}</p>
        </>
      ))}
    </>
  );
};

export default Todo;
