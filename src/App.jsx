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

    //code to get users geolocation
}
async getLocation(){
  const response = await fetch("https://us-central1-quick-doodad-233803.cloudfunctions.net/geolocation")
}
  render() {
    return (
      <div className="App">
       <h1 className="jumbotron">Get me Food!</h1>
       <br></br>
       <p>(a neat tool designed to help users find the best rated restaurants around them.)</p>
       <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What do you want to eat?" onChange={this.handleInput} value={this.state.food}/>
        <input type="submit" value="Submit" />
      </form>
 
      { this.state.chosenfood && 
      <FoodChoice foodchoice = {this.state.chosenfood}/> 
     }
     <button type="button" className="btn btn-primary">Primary</button>
      </div>
      
    );
  }
}

export default App;
