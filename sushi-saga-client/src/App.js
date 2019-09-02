import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    moneyLeft: 200,
    allDishes: [],
    eatenDishes: [],
  };

  componentDidMount = () => {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        this.setState({
          allDishes: res
        });
      });
  };

  eatenDish = sushi => {
    if (this.state.moneyLeft - sushi.price > 0) {
      let update = this.state.eatenDishes;
      update.push(sushi);
      this.setState({
        eatenDishes: update,
        moneyLeft: this.state.moneyLeft - sushi.price
      })
    }
    else{
      alert("You don't have enough $$$ for this item. Please add more funds")
    }
  };

  addMoney = (event) => {
    event.preventDefault()
    this.setState({
     moneyLeft: this.state.moneyLeft + parseInt(event.target.amount.value)
    }, event.target.reset())
    
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          seeMoreDishes={this.seeMoreDishes}
          allDishes={this.state.allDishes}
          eatenDish={this.eatenDish}
          boughtDishes={this.state.eatenDishes}
        />
        <Table
          moneyLeft={this.state.moneyLeft}
          eatenDishes={this.state.eatenDishes}
        />

        <SushiWallet addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
