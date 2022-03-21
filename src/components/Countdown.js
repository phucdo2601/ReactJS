import React, { Component } from "react";

/**
 * countdown timer by class component
 */
class Countdown extends Component {
  state = {
    count: 10,
  };

  /**
   * Sau khi render chay thi se chay componentDidMount:
   * componentDidMount chay sau khi chung ta render lan dau, se chen cac phan tu vao cay element
   */
  componentDidMount() {
    /**
     * ham setTimeout chi chay mot lan thoi
     */
    // setTimeout(() => {
    //   console.log(">>>check me");
    // }, 1000);

    /**
     * ham setInterval: la thoi gian chung ta lap lai, chay vinh cuu
     */

    /**
     * dat bien var de cac ham o ngoai co the truy cap dc bien do
     * dat bien let thi no chi co gia tri trong ham khai bao bien do ma thoi
     */
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  /**
   * Update lai giao dien trang thai
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimeUp();
      }
    }
  }

  render() {
    return (
      <>
        <div>{this.state.count} class</div>
      </>
    );
  }
}

/**
 * de export nhieu cai thi bo default them ki tu object o ngoai
 */
export { Countdown };
