const Todo = (props) => {
  /**
   * props = properties => phuc vu cho viec chuyen du lieu giua cac component (Chi Chuyen du lieu tu component cha xuong con
   *    top => bottom
   * )
   */

  const todos = props.myData;
  console.log(">>> check props: ", props);
  return (
    <>
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
    </>
  );
};
export default Todo;
