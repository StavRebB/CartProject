import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartNum: 0,
    }
  }

  changeCartNum = (num) => {
    // console.log(arr)
    // let cartItems = 0;
    // for (let i=0; i < arr.length; i++) {
    //   if (arr[i] !== 0) {
    //     cartItems += 1;
    //   }
    // }
    this.setState({
        cartNum: num,
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <Header cartNum={this.state.cartNum}/>
        </div>
        <div>
          <Main changeCartNum={this.changeCartNum}/>
        </div>
      </div>
    );
  }
}

export default App;
