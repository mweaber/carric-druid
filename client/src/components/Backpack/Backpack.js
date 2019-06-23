import React, {Component} from "react";
import { Link } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import API from "../../utils/API";
import "./style.css";

class Backpack extends React.Component {

    state={
        item:[],
        title:"",
        description:""
    };


    constructor(props) {
        super(props);
        this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
      }

    
        scrollToTopWithCallback = () => {
            let scroller = scrollToComponent(this.Trait, { offset: 0, align: 'top', duration: 1500});
            scroller.on('end', () => console.log('Scrolling end!') );
        };

        handleInputChange = event => {
            const {title, value} = event.target;
            this.setState({
                [title]: value
            });
        };

        getItems = () => {
            API.getItems(this.state.items)
                .then(res => 
                    this.setState({
                        items: res.data
                    })
                )
                .catch(() => 
                    this.setState({
                        items: [],
                        message: "No Items found, please add one to begin"
                    })
                );
        };

        handleFormSubmit = event => {
            event.preventDefault();
            this.getItems();
        };

        handleSaveItem = id => {
            const item = this.state.items.find(item => item.id === id);

            API.saveItem({
                title:item.title,
                description:item.description
            }).then(() => this.getItems());
        };

        // renderSelectedForm = event =>{
        //     event.preventDefault();
        //     let formPicked = this.state.formSelected
        //     switch (formPicked) {

        //         case "Item":
        //             console.log("Item Form Selected");
        //         break;
        //     }
        //     console.log("Starting Form Pick");
        // }
    
    render() {
        return(

            <div>
                <div className="heading" ref={(div) => {this.Top = div}}>
                    Welcome to my Inventory Page. I will be updating this page as I gather
                    new items and materials!
                    <h4>Jump to: <button className="item-jump" onClick={() => scrollToComponent(this.Item,{duration: 1500})}>My Items</button></h4>
                    <h4>Jump to: <button className="weapon-jump" onClick={() => scrollToComponent(this.Weapon, {duration:1500})}>My Weapons</button></h4>
                    <h4>Jump to: <button className="spell-jump" onClick={() => scrollToComponent(this.Spell, {duration:1500})}>My Spells</button></h4>
                    <Link to="/">← Back to Home</Link>
                    <Link to="/aboutme">← Back to About Me</Link>
                </div>

                {/* Entering New Item */}
                <div className="backpack"> 
                    <div ref={(div) => {this.Item = div}}>
                        <h5>Here is where all current items will show to the user</h5>
                        <h2>Items:</h2>
                    </div>
                    <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                    <form>
                        <h5>Please enter an item:</h5>
                        <input
                            value={this.state.itemTitle}
                            name="itemTitle"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Please Enter Item Title"
                        />
                        <input
                            value={this.state.itemDescription}
                            name="itemDescription"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Please Enter Item Descrption"
                        />
                        <button onClick = { () => this.handleItemSave()} 
                            className="submitItem" >Enter New Item</button>   
                    </form>
                   
                    {/* Entering New Weapon */} 
                    <div className="currentWeapons" ref={(div) => {this.Weapon = div}}>
                        <h5>Here is where the user will see all weapons on hand.</h5>
                    </div>
                    <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                    <form>
                        <h5>Please enter a weapon:</h5> 
                        <input
                            value="{this.state.weaponTitle}"
                            name="weaponTitle"
                            onChange="{this.handleInputChange"
                            type="text"
                            placeholder="Please Enter Weapon Title"
                        />
                        <input
                            value="{this.state.weaponDescription}"
                            name="weaponDescription"
                            onChange="{this.handleInputChange}"
                            type="text"
                            placeholder="Please Enter Weapon Description"
                        /> 
                        <input
                            value="{this.state.stats}"
                            name="weaponStats"
                            onChange="{this.handleInputrChange}"
                            type="text"
                            placeholder="What Is This Weapons Attack?"
                        />
                        <button className="submitWeapon">Submit New Weapon</button> 
                    </form>
                   

                    {/* Entering New Spell */} 
                    <div className="currentSpells" ref={(div) => {this.Spell = div}}>
                        <h5>Here is where the user will see all spells known.</h5>
                    </div>
                    <button onClick={() => scrollToComponent(this.Top, {duration:1500})}>Return</button>
                    <form>    
                        <h5>Please enter a Spell:</h5> 
                        <input
                            value="{this.state.spellTitle}"
                            name="spellTitle"
                            onChange="{this.handleInputChange"
                            type="text"
                            placeholder="Please Enter Spell Title"
                        />
                        <input
                            value="{this.state.spellDescription}"
                            name="spellDescription"
                            onChange="{this.handleInputChange}"
                            type="text"
                            placeholder="Please Enter Spell Description"
                        /> 
                        <input
                            value="{this.state.stats}"
                            name="spellStats"
                            onChange="{this.handleInputrChange}"
                            type="text"
                            placeholder="What Is This Spells Attack?"
                        />
                        <button className="submitWeapon">Submit New Spell</button> 
                    </form>
                   
                </div>


                {/* Attempt to make smart form where user will select what type of thing they want to add
                and the correct form will show. */}


                {/* <div className="smartForm">
                    <form>
                        <h5>Please Select Form</h5>
                        <select className="openForm" onChange={(e) => this.setState({ value: e.target.value })}>
                            <option value="Blank"></option>
                            <option className="Item" value={this.state.value}>Item</option>
                            <option className="Weapon" value={this.state.value}>Weapon</option>
                            <option className="Spell" value={this.state.value}>Spell</option>
                            <button className="pickForm" onClick={this.renderSelectedForm}>Next</button>
                        </select>
                    </form>


                    <form className="form_item" style="display:none">
                        {/* <!---- THIS IS FORM 1----> */}
                        {/* <h5>Item Success</h5>
                    </form>

                    <form className="form_weapon" style="display:none">
                        {/* <!---- THIS IS FORM 2----> */}
                    {/* </form>

                    <form className="form_spell" style="display:none">
                        {/* <!---- THIS IS FORM 3----> */}
                    {/* </form> */} 


                {/* </div> */}




            </div>
        );
    };


}

export default Backpack; 
