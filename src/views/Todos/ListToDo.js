import React, { Component } from "react";
import "../Todos/ListTodo.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

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
        id: "todo2",
        title: "Fixing Bug",
      },
      {
        id: "todo4",
        title: "Reading a book",
      },
    ],
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

  render() {
    //let listTodos  = this.state.listTodos;
    let { listToDos } = this.state;

    return (
      <div className="list-todo-container">
        <AddToDo addNewTodo={this.addNewTodo} />

        <div className="list-todo-content">
          {listToDos &&
            listToDos.length > 0 &&
            listToDos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>

                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

//de cac file khac goi class nay
export default ListToDo;
