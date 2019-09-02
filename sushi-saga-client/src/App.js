import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    moneyLeft: 200,
    allDishes: [],
    eatenDishes: [],
    currentDishes: [],
    currentGroupIndexStart: 0
  }



  componentDidMount = () =>{
    fetch(API)
    .then(res => res.json())
    .then(res => {
      this.setState({
        allDishes: res
      })
    })
  }

  eatenDish = (sushi) =>{
   let update = this.state.eatenDishes
   update.push(sushi)
    this.setState({
     eatenDishes: update
   })
  }


  

  render() {
    return (
      <div className="app">
        <SushiContainer seeMoreDishes={this.seeMoreDishes} allDishes={this.state.allDishes} eatenDish={this.eatenDish} boughtDishes={this.state.eatenDishes}/>
        <Table moneyLeft={this.state.moneyLeft} eatenDishes={this.state.eatenDishes}/>
      </div>
      
    );
  }
}

export default App;