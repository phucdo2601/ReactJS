import React, { Component } from "react";
import axios from "axios";
import "../Users/ListUser.scss";

class ListUser extends Component {
  state = {
    listUsers: [],
  };
  /**
   * Thu tu chay cua React: render -> componentDidmount
   */
  //lay data xong chay vo ham then
  //   componentDidMount() {
  //     axios.get("https://reqres.in/api/users?page=2").then((res) => {
  //       // res.data: in ra du lieu tren len
  //       console.log(">>> check res: ", res.data);
  //     });
  //   }

  //es7
  //bat dong bo cua javascript
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch All List Users</div>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div className="child" key={item.id}>
                {item.id} - {item.email} - {item.first_name}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListUser;
