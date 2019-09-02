import React, {Component} from 'react'


export default class SushiWallet extends Component{

        render(){
            
            return(
                
                <form onSubmit={event => this.props.addMoney(event)}>
                    <label> Add Money Here:   
                    <input type="number" name="amount" min="0" placeholder="Enter amount to add here"/>
                    </label>
                    <button>Add Money</button>
                </form>
              

            )
        }

}