import React, { Component } from "react";
import { toast } from "react-toastify";
class AddToDo extends Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  //ham add mot phan tu moi vao mang
  /**
   * O cach nay dung prop chuyen tu thang cha xuong con
   * O thang con se goi nguoc len thang cha de kich hoat function nay
   */
  handleAddTodo = () => {
    if (!this.state.title) {
      //if(undefined/null/empty) => false: se khong thuc hien
      //muon co toast nay thi them thu vien yarn add react-toastify
      toast.warning("missing title!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />

        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

//de cac component khac goi den component nay
export default AddToDo;
