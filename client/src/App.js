import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav/Nav";
import About from "../src/components/About/About";
import Backpack from "../src/components/Backpack/Backpack";
import Home from "../src/components/Home/Home";

class App extends Component {
  render() {
    return (

      <Router>
            <Nav/>
            <Switch>
                <Route exact path = "/" component ={Home}/>
                <Route exact path = "/aboutme" component = {About}/>
                <Route exact path = "/backpack" component = {Backpack} />
                {/* <Route component = {NoMatch} /> */}
            </Switch>
        </Router> 
     
    );
  }
}

export default App;
