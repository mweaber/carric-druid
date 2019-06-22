import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Body from "../src/components/Body/Body";

class App extends Component {
  render() {
    return (

      <Router>
            <Nav/>
            <Switch>
                {/* <Route exact path = "/" component ={Home}/> */}
                <Route exact path = "/aboutme" component = {Body}/>
                {/* <Route exact path = "/backpack" component = {Backpack} /> */}
                {/* <Route component = {NoMatch} /> */}
            </Switch>
        </Router> 
     
    );
  }
}

export default App;
