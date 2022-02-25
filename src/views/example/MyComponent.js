import React, { Component, Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

/**
 * JSX: cho phep mot ham cua javascript tra ra doan code html, va dinh nghia cac bien
 * JSX => return block
 * chi co mot phan tu bao boc ngoai cung <div></div>
 */

/**
 *  state: co the giup du lieu cap nhap real time
 * la bo nho luu tru cua react: state
 */

class MyComponent extends Component {
  //state la mot object, bao gom mot cap key value
  /**
   * Mot khi gia tri trong state thay doi, thi gia tri tren component se thay doi, ma khong can refresh lai trang
   */

  /**
   * Dom: tat ca cac phan tu cau hinh len website
   * Dom Event: Tat ca cac su kien say ra tren website cua chung ta
   */

  //key:value
  state = {
    arrJobs: [
      {
        id: "test01",
        title: "developer",
        salary: 500,
      },
      {
        id: "test02",
        title: "tester",
        salary: 400,
      },
      {
        id: "test03",
        title: "Project manager",
        salary: 1000,
      },
    ],
  };

  addNewJob = (job) => {
    // let currentJobs = this.state.arrJobs;

    console.log("check job from parent: ", job);

    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  /**
   *
   * @returns props : proerty la nhung gi minh truyen di hoac cho di
   * props giai quyet van de truyen data cua react
   * truyen tu tren xuong duoi
   * Tac dung truyen props: tai su dung dc code
   */

  //Muon render ra noi dung thi can khai bao render(){return()}
  render() {
    console.log(">>> call render: ", this.state);
    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state

      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

//export default: mac dinh tra ve file dat sau chu default, muon tra ve nhieu file thi: export {}
export default MyComponent;
