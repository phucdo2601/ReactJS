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

  state = {
    name : 'Phuc Do',
    age:21
  }

  //ham bat su kien thay doi cua giao dien
  handleOnChangeName = (event) =>{
    this.setState(
      {
        name: event.target.value
      }
    )
  }

  //ham bat su click cua nut
  handleClickButton = () => {
    console.log('hit button');
    alert('click me')
  } 

  //Muon render ra noi dung thi can khai bao render(){return()}
  render() {

    return (
      //dung mot dau ngoac nhon de gan ten bien muon in trong components

      //boc ben ngoai co the tra ve nhieu khoi

      //lay mot bien trong state
      <>
        <div className="first">
          <input
          value={this.state.name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          
          Hello My Component by {this.state.name}!
        </div>
        <div className="second">
            I am {this.state['age']} year old!
        </div>

        <div className="third">
          {/* cu phap khai bao mot arrow function */}
          <button onClick={ () => this.handleClickButton() }>
            Click me
          </button>
        </div>
      </>
    );
  }
}

//export default: mac dinh tra ve file dat sau chu default, muon tra ve nhieu file thi: export {}
export default MyComponent;
