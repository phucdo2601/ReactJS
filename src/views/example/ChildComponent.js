import React, { Component } from 'react'

export class ChildComponent extends Component {
  //key:value
  state = {
    firstName : '',
    lastName : ''
  }

  handleChangeFirstName = (event) => {
    this.setState (
      {
        firstName: event.target.value,
      }
    )
  }

  handleChangeLastName = (event) => {
    this.setState(
      {
        lastName: event.target.value
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
    alert('Click me')
  }

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
    let {name, age, address, arrJobs } = this.props;
    let a = '';

    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state
      <>
       <div className="job-list">
           Child component: My name is {name}, My age is {age + 7}, My address is {address}
           {
               a= arrJobs.map((item, index) =>{
                   return (
                       //nen sinh khoa key khi nhan data tu cha sang con
                       <div key={item.id}>
                           {item.title} - {item.salary}
                       </div>
                   )
               })
               
           }
           {console.log('>> check map array: ', a)}
       </div>
      </>
    );
  }
}

export default ChildComponent