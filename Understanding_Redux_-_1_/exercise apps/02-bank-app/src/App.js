import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { store } from "./store";
import ButtonGroup from "./ButtonGroup";
import { giveAwayEverything } from './actions';


class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <ButtonGroup amounts={[10000, 5000]} />

        <p className="App__giveaway" onClick={dispatchGiveAwayEverything}>Give away all your cash to charity</p>
      </div>
    );
  }
}

function dispatchGiveAwayEverything() {
  store.dispatch(giveAwayEverything());
}

export default App;
