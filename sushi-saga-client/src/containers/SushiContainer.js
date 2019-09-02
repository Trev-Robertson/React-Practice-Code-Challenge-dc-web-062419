import React, { Fragment } from "react";

import MoreButton from "../components/MoreButton";
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {

  state = {
  counter: 0
}

seeMoreDishes = () => {
  if (this.state.counter >= this.props.allDishes.length - 4){
  this.setState({
  counter: 0})}
  else{
    this.setState({
      counter: this.state.counter + 4})}
}


render() {
  return (
    <Fragment>
      <div className="belt">
        {this.props.allDishes.slice(this.state.counter, this.state.counter + 4).map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenDish={this.props.eatenDish} boughtDishes={this.props.boughtDishes}/>)}
        <MoreButton seeMoreDishes={this.seeMoreDishes}/>
      </div>
    </Fragment>
  )
};
}

export default SushiContainer;
