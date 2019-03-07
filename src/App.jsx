import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      food:""

    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    let yumFood = e.target.value;
    this.setState({
      food: yumFood
    })
    console.log(this.state.food)
  }
  render() {
    return (
      <div className="App">
       <h1>Get me Food!</h1>
       <br></br>
       <p>(a neat tool designed to help users find the best rated restaurants around them.)</p>
       <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What do you want to eat?" onChange={this.handleInput} value={this.state.food}/>
      </form>
      </div>
    );
  }
}

export default App;
