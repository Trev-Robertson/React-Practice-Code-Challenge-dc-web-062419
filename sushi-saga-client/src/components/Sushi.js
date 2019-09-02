import React, { Fragment } from "react";

const Sushi = props => {
  // const {name, img_url, price} = props.sushi
  // debugger;

  return (
    <div className="sushi">
      <div className="plate" onClick={props.boughtDishes.includes(props.sushi) ? null : () => props.eatenDish(props.sushi)}>
        {props.boughtDishes.includes(props.sushi) ? null : 
        <img src={props.sushi.img_url} width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi ? props.sushi.name : null} - ${props.sushi ? props.sushi.price: null}
      </h4>
    </div>
  );
};

export default Sushi;
