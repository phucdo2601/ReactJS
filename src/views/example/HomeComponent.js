import React, { Component } from "react";
import { withRouter } from "react-router";

class HomeComponent extends Component {
  componentDidMount() {
    //   ham nay se chay sau bao nhieu giay se thuc hien noi dung ben trong doan code
    setTimeout(() => {
      console.log("check timeout");
      //   de dung dc ham history thi phai cai export bang withRouter
      this.props.history.push("/todo");
    }, 3000);
  }

  //HOC: Higher order component
  /**
   * Khi bo mot thang ben ngoai component thi no se dung hop lai cac tinh nang cua comp hien tai va ca cac tinh nang cua thu vien
   * @returns
   */
  render() {
    console.log(">>> check props: ", this.props);
    return <div>Hello world from HomePage with PhucDn</div>;
  }
}

//De cac component khac tiep nhan dc component nay
export default withRouter(HomeComponent);
