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
    console.log(">>> call render: ", this.state);
    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state
      <>
       <div>
           Child component: {this.props.name}
       </div>
      </>
    );
  }
}

export default ChildComponent