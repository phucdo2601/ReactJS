import React, { Component, Fragment } from "react";

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
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" value= {this.state.firstName} 
          onChange={(event) => this.handleChangeFirstName(event) }/>
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" value={this.state.lastName} 
            onChange={(event) => this.handleChangeLastName(event)}/>
          <br />
          <br />
          <input type="submit" value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

//export default: mac dinh tra ve file dat sau chu default, muon tra ve nhieu file thi: export {}
export default MyComponent;
