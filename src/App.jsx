import React, { Component } from 'react';
import './App.css';
import FoodChoice from './FoodChoice';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      foodinput:"",
      chosenfood:"",
      list: []

    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleInput(e){
   this.setState({
      foodinput: e.target.value
    })
  }
  
  handleSubmit(e){
    e.preventDefault()
    let arrOf = this.state.food
    this.state.list.push(arrOf)
    this.setState({
      chosenfood:this.state.foodinput
    })
    console.log(this.state.chosenfood)
    console.log(this.state.list.length, "length")
    }
  render() {
    return (
      <div className="App">
       <h1>Get me Food!</h1>
       <br></br>
       <p>(a neat tool designed to help users find the best rated restaurants around them.)</p>
       <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What do you want to eat?" onChange={this.handleInput} value={this.state.food}/>
        <input type="submit" value="Submit" />
      </form>
 
      { this.state.chosenfood && 
      <FoodChoice foodchoice = {this.state.chosenfood}/> 
     }
      </div>
      
    );
  }
}

export default App;
