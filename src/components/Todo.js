const Todo = (props) => {
  /**
   * props = properties => phuc vu cho viec chuyen du lieu giua cac component (Chi Chuyen du lieu tu component cha xuong con
   *    top => bottom
   * )
   */

  // const todos = props.myData;
  // console.log(">>> check props: ", props);

  //cach go han lay props tu chat
  /**
   *
   */
  const { myData, title, deleteDataTodo } = props;
  const handleDelete = (id) => {
    // alert(id);
    deleteDataTodo(id);
  };

  return (
    <>
      <div className="todos-container">
        <div className="title">{title}</div>
        {myData.map((todo) => {
          // console.log(">>>check todo: ", todo);
          return (
            // can dat key de nang cao hieu nang reactjs, va bat su kien

            <div key={todo.id}>
              <li className="todo-child">
                {todo.title} &nbsp; &nbsp;
                <span onClick={() => handleDelete(todo.id)}>x</span>
              </li>
            </div>
          );
        })}

        <hr />
      </div>
    </>
  );
};
export default Todo;
