import React, { Component } from 'react';
import './App.css';
import HelloTest from './HelloTest/HelloTest';



class App extends Component {
  render(){
    return (
      <div className="App">
        <HelloTest test2="123djgh" />
      </div>
    );
  }
	
};

export default App;
