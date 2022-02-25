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
    let {name, age } = this.props;

    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state
      <>
       <div>
           Child component: {name}, My age is {age + 7}
       </div>
      </>
    );
  }
}

export default ChildComponent