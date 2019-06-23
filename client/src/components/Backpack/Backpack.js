import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Backpack extends React.Component {
    
    render() {
        return(
            <div>
                Welcome to my Inventory Page. I will be updating this page as I gather
                new items and materials!
                <Link to="/">← Back to Home</Link>
                <Link to="/aboutme">← Back to About Me</Link>
            </div>
        );
    };


}

export default Backpack; 
