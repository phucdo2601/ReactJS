import React, { Component } from "react";
import axios from "axios";
import "../Users/ListUser.scss";
import { withRouter } from "react-router-dom";

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

  handleViewDetailUser = (user) => {
    // console.log("check user: ", this.props);
    //day id qua trang detail user
    //gan bien trong react
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch All List Users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {item.id} - {item.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
