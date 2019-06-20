import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Body from "../src/components/Body/Body";

class App extends Component {
  render() {
    return (

      <div>
        <Nav/>
        <Body/>
      </div>  
     
    );
  }
}

export default App;
