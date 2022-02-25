import React, { Component } from "react";

//nen dung class component
export class ChildComponent extends Component {
  //key:value
  state = {
    showJobs: false,
  };

  //function conditional show hide button
  handleShowhide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    // alert("click me");
    console.log(">>> handleOnClickDelete: ", job);
    this.props.deleteAJob(job);
  };

  //Muon render ra noi dung thi can khai bao render(){return()}
  render() {
    // this.props: kiem tra du lieu tu thang cha truyen xuong thang con
    // console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    //cu phap go ngan cua gan tien bien
    /**
     * Dung dc cu phap nay khi va chi khi cu phap ten bien trung voi key cua props truyen di
     */
    let { name, age, address, arrJobs } = this.props;
    let { showJobs } = this.state;

    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    let a = "";

    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state
      <>
        {/* dung toan tu 3 ngoi */}
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowhide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              Child component: My name is {name}, My age is {age + 7}, My
              address is {address}
              {
                (a = arrJobs.map((item, index) => {
                  return (
                    //nen sinh khoa key khi nhan data tu cha sang con
                    <div key={item.id}>
                      {item.title} - {item.salary} <></> <></>{" "}
                      <span onClick={() => this.handleOnClickDelete(item)}>
                        x
                      </span>
                    </div>
                  );
                }))
              }
              {console.log(">> check map array: ", a)}
            </div>
            <div>
              <button onClick={() => this.handleShowhide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

//lay bien du lieu tu thang cha sang con thi them prop trong kieu du lieu truyen vao(function component)
// const ChildComponent = (props) => {
//     console.log('>>> check child props', props);
//     /**
//      * Khong can keyword this. truoc props boi vi chung ta lay thang tu props truyen vao o tren
//      */
//     let {arrJobs} = props;
//     return (
//         <div>
//             {
//                arrJobs.map((item, index) =>{
//                 if(item.salary >= 500) {
//                     return (

//                         //nen sinh khoa key khi nhan data tu cha sang con
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 }

//                })

//            }

//         </div>
//     )
// }

export default ChildComponent;
