import React, {Component} from "react";
import { Link } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import "./style.css";

class Home extends React.Component {
    
    render() {
        return(
            <div>
                Welcome to the Carric Nailo Resource Page!
                <Link to="/backpack">← Back to Backpack</Link>
                <Link to="/aboutme">← Back to About Me</Link>
            </div>
        );
    };


}

export default Home; 