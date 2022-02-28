import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log("check res user: ", res.data);
    }
  }

  //function tro lai trang
  handleBackButton = () => {
    this.props.history.push("/user");
  };

  render() {
    // console.log(">>> check props: ", this.props);
    let { user } = this.state;
    //check phan tu co rong hay khong
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>
          Hello world from detail user with id : {this.props.match.params.id}
        </div>
        {isEmptyObj === false && (
          <>
            <div>Username: {user.id}</div>
            <div>Email: {user.email}</div>
            <div>Firstname: {user.first_name}</div>
          </>
        )}
        <div>
          <img src={user.avatar} />
        </div>

        {/* nut quay tro lai trang  */}
        <div>
          <button type="button" onClick={() => this.handleBackButton()}>
            Back
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(DetailUser);
