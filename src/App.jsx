import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      food:""

    }
  }
  render() {
    return (
      <div className="App">
       <h1>Get me Food!</h1>
       <br></br>
       <p>(a neat tool designed to help users find the best rated restaurants around them.)</p>
       <form>

      </form>
      </div>
    );
  }
}

export default App;
