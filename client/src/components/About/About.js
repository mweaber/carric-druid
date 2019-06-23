import React, {Component} from "react";
import { Link } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import "./style.css";

      

class About extends React.Component {
    
            
    constructor(props) {
        super(props);
        this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
      }

    
        scrollToTopWithCallback = () => {
            let scroller = scrollToComponent(this.Trait, { offset: 0, align: 'top', duration: 1500});
            scroller.on('end', () => console.log('Scrolling end!') );
        };

        render() {
            return(
                <div className ="body-container">

                    <div className="heading" ref={(div) => {this.Top = div}}>
                        <h2>Welcome!</h2>
                        <h4>Jump to: <button className="traits-jump" onClick={() => scrollToComponent(this.Trait,{duration: 1500})}>My Character Traits</button></h4>
                        <h4>Jump to: <button className="family-jump" onClick={() => scrollToComponent(this.Family, {duration:1500})}>Family Tree</button></h4>
                        <h4>Jump to: <button className="story-jump" onClick={() => scrollToComponent(this.Story, {duration:1500})}>My Adventures</button></h4>
                        <Link to="/">← Back to Home</Link>
                        <Link to="/backpack">← Back to Backpack</Link>
                    </div>

                    <div className="intro-body">
                        <h2 className="header">Introductions:</h2>
                        <p className="intro-text">Here is my backstory about my life as a elf druid. I will be updating this
                            page as time goes on, giving you details of my exploits. I will also be giving
                            you to details of my family tree and how my clan came to be, how my story starts, and what drove
                            me connect with nature and the path to being a druid.
                        </p>
                    </div>

                    <div className="traits" ref={(div) => {this.Trait = div}}>
                        <h2 className="header">My Character Traits</h2>
                        <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                        <div className="traits-text">
                            <ul>
                                <li>Race: Wood Elf</li>
                                <li>Age: 72</li>
                                <li>Class: Druid</li>
                                <li>Alignent: Neutral Good</li>
                                <li>Height: 5'6''</li>
                                <li>Weight: 110lbs</li>
                            </ul>
                        </div>

                        <div className="abilities-prof">
                            <h5>Abilities & Proficienies</h5>
                            <ul>
                                <li>Dark Vision</li>
                                <li>Fey Ancestry</li>
                                <li>Trance (4 Hours)</li>
                                <li>Mask Of The Wild</li>
                            </ul>
                            <ul>
                                <h5>Languages</h5>
                                <li>Common</li>
                                <li>Elvish</li>
                                <li>Druidic</li>
                                <li>Dwarvish (Outlander)</li>
                            </ul>
                            <ul>
                                <h5>Elf & Druidic Weapon Proficienies</h5>
                                <li>Long Sword</li>
                                <li>Short Sword</li>
                                <li>Long Bow</li>
                                <li>Short Bow</li>
                                <li>Light Armor</li>
                                <li>Medium Armor</li>
                                <li>--------------</li>
                                <li>Clubs</li>
                                <li>Darts</li>
                                <li>Maces</li>
                                <li>Scimitar</li>
                                <li>Slings</li>
                                <li>Daggers</li>
                                <li>Javelins</li>
                                <li>Quarterstaffs</li>
                                <li>Sickles</li>
                                <li>Spears</li>
                            </ul>
                        </div>
                    <div className="physical">
                        <h5>Physical Traits</h5>
                        <p>I have grey/copper skin, gold eyes, black shoulder length hair,
                        and a small scar above my right eye. 
                        </p>
                    </div>
                

                    <div className="family-tree" ref={(div) => {this.Family = div;}}>
                        <h2 className="header">My Family Tree:</h2>
                        <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                        <p className="family-tree-text">
                        I was born, I had a family, and now I have no one left but myself and my bond with nature.
                        </p>
                        <p>My name is Carric Nailo the wood elf. I grew up in small roaming clan traders and merchants.
                        The year of my birth was terrible rains that forced our clan to make a small sheltered camp 
                        in an oak forest. It was here amongst the tall and powerful oaks that I fell in love with 
                        nature and the divine spirits of the woods. After several years of rain and the ability to travel to 
                        the nearby cities to trade my clan decided that making this camp our permanent home.
                        </p>
                        <p> 
                        My father Rolen Nailo was a leatherworker and retired bounty hunter. He was tall for our race at 6'4"
                        but had a kind face and was very respected in our clan for his craftsmenship. 
                        My mother Keyleth was a herbalist who had an encylopedic knowledge of plants and their uses. 
                        They were married and had a small family of three children. I, Carric, am the oldest and I have
                        two younger sisters Shava (64) and Enna (56).     
                        </p>
                        <p>
                        It was after many years of prosperity that the worst day of my life occured. I was out at the river
                        fishing and swimming that I returned to my camp to find that a terrible group of raiders had come and 
                        burned my camp to the ground and killed everyone. My parents, my sisters, my whole clan was gone.
                        While searching the ruins of my home I found a small white birds feather that was not known in these parts. 
                        It was after burying my family and packing my bags I decided to find these raiders and get my revenge. 
                        </p>
                    </div>

                    <div className="exploits" ref={(div) => {this.Story = div}}>
                        <h2 className="header">My Adventures</h2>
                        <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                        <p className="exploits-text">
                        I met with my current group of travellers and here is how you can read all about it.
                        </p>
                    </div>
                </div>
            </div> 
        
        );
    }
            
    
}

export default About;