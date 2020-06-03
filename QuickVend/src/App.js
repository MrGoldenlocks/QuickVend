import React, { Component } from "react";
//import axios from "axios";
import logo from "./5eD&DLogo.svg";
import "./App.css";
import InputForm from "./list";
//import Clock from "./clock";
//import chat from "./chat.js";
//import chat from "./chat";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to QuickVend</h1>
          <p>
            A tool for DMs to quickly create, access, and display vendor
            inventories
          </p>
        </header>
        <br />
        <InputForm />
        <br />
      </div>
    );
  }
}

export default App;
