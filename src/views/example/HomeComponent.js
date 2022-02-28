import React, { Component } from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/test1.jpg";

import { connect } from "react-redux";

class HomeComponent extends Component {
  componentDidMount() {
    //   ham nay se chay sau bao nhieu giay se thuc hien noi dung ben trong doan code
    // setTimeout(() => {
    //   console.log("check timeout");
    //   //   de dung dc ham history thi phai cai export bang withRouter
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    console.log(">>>check user delete: ", user);
    this.props.deleteUserRedux(user);
    /**
     * dung action cua redux
     *
     */
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  //HOC: Higher order component
  /**
   * Khi bo mot thang ben ngoai component thi no se dung hop lai cac tinh nang cua comp hien tai va ca cac tinh nang cua thu vien
   * @returns
   */
  render() {
    console.log(">>> check props redux: ", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello world from HomePage with PhucDn;</div>
        <div>
          {/* khong add thang anh vao src, phai import anh vao mot ten bien, roi lay ten bien cho vo src */}
          <img src={logo} style={{ width: "150px", height: "150px" }} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}

          <button onClick={() => this.handleCreateUser()}>Add New</button>
        </div>
      </>
    );
  }
}

//De cac component khac tiep nhan dc component nay
// export default withRouter(HomeComponent);

/**
 * trong truong hop nay, state la cua redux
 */
const mapStateToProps = (state) => {
  return {
    //dat ten bat ki la gi
    dataRedux: state.users,
  };
};

/**
 * O day dispatch la cua redux
 */
const mapDispatchToProps = (dispatch) => {
  return {
    //dispatch on action
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({
        type: "CREATE_USER",
      });
    },
  };
};
//phai them cac ham goi den phia redux vao trong ngoac tron gan connect

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(HomeComponent));
