import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
  state = {
    manager: '',
    players: [],
    balance : '',
    value : '',
    message: ''
  };
  
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    //Where the fuck does .options.address come from? is this a web3 function?
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager, players, balance});
  }
//Event handler
//Using an arrow function will prevent us from needing to worry about the property of .this in a render function
  onSubmit = async (event) => {
    //Prevents the action from happening by default when loading a page
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    //Don't forget to intialize the component at the top of the class!
    this.setState({message: 'Waiting on transaction success...'})
    await lottery.methods.enter().send({
      //assumes the first address from the array of accounts is the one to be used to enter the lottery
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')

    });

    this.setState({message : 'You have been entered!'})
  };

  onClick = async (event) =>{
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
   this.setState({message: 'Waiting on transaction success...'});

    await lottery.methods.pickWinner().send({
      from: accounts[0]

    });

   this.setState({message : 'A winner has been picked!'});

  }


//Consider making the page in a way that only the manager can see the field

  render() {
    return (
     <div>
       <h2>Lottery Contract</h2>
       <p> 
         This contract is managed by {this.state.manager}.
         There are currently {this.state.players.length} people entered,
         competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
       </p>
        <hr></hr>
       <form onSubmit={this.onSubmit}>
         <h4>
           Want to try your luck?
         </h4>
         <div>
           <label>Amount of ether to enter</label>
           <input
           value = {this.state.value}
           onChange={event => this.setState({value: event.target.value})}
           />
         </div>
         <button>
           Enter
         </button>
       </form>
       <h3></h3>

       <hr></hr>
      <h4> Ready to pick a winner?</h4>
      <button onClick ={this.onClick}>Pick a winner!</button>
       <hr></hr>
      <h1>{this.state.message} </h1>
     </div>

    );
  };
  };


  

export default App;
