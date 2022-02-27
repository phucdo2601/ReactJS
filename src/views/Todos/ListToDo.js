import React, { Component } from "react";
import "../Todos/ListTodo.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListToDo extends Component {
  state = {
    listToDos: [
      {
        id: "todo1",
        title: "Doing hommework",
      },
      {
        id: "todo2",
        title: "Making Video",
      },
      {
        id: "todo3",
        title: "Fixing Bug",
      },
      {
        id: "todo4",
        title: "Reading a book",
      },
    ],

    editTodo: {},
  };

  addNewTodo = (todo) => {
    /**
     * Cach don gian :
     * let currentListTodo = this.state.listToDos;
     * currentListTodo.push(todo);
     * this.setState({
     *    listToDos: currentListTodo,
     * });
     */
    this.setState({
      //dung toan tu speard syntax (...) cua js: toan tu copy
      listToDos: [...this.state.listToDos, todo],
    });

    toast.success("Add new Record is done!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listToDos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listToDos: currentTodos,
    });
    toast.success("Delete record");

    console.log(">>> check todo: ", todo);
  };

  handleEditTodo = (todo) => {
    let { editTodo, listToDos } = this.state;
    //check phan tu co rong hay khong
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listToDos];

      //Find index of specific object using findIndex method.
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listToDos: listTodosCopy,
        editTodo: "",
      });

      toast.success("update record is successful");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    //set title bang tile input
    editTodoCopy.title = event.target.value;

    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    //let listTodos  = this.state.listTodos;
    let { listToDos, editTodo } = this.state;

    //check phan tu co rong hay khong
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check isEmptyObj: ", isEmptyObj);

    return (
      <>
        <p>Simple Todo App with ReactJS(PhucDn &amp; Practice)</p>

        <div className="list-todo-container">
          <AddToDo addNewTodo={this.addNewTodo} />

          <div className="list-todo-content">
            {listToDos &&
              listToDos.length > 0 &&
              listToDos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

//de cac file khac goi class nay
export default Color(ListToDo);
