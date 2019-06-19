import React from "react";
import "./style.css";

function Body() {
    return (
        <div className ="body-container">
            <div className="heading">
               <h2>Welcome to my story!</h2>
            </div>

            <div className="intro-body">
                <p className="intro-text">Here is my backstory about my life as a elf druid. I will be updating this
                    page as time goes on, giving you details of my exploits. I will also be giving
                    you to details of my family tree and how my clan came to be, how my story starts.
                </p>
            </div>

            <div className="family-tree">
                <p className="family-tree-text">
                    I was born, I had a family, and now I have no one left but myself and my bond with nature.
                </p>
            </div>

            <div className="exploits">
                <p className="exploits-text">
                    I met with my current group of travellers and here is how you can read all about it.
                </p>
            </div>
        </div>
    );
}

export default Body;