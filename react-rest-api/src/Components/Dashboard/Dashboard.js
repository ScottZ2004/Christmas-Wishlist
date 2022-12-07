import List from "../List/List";
import "./Dashboard.css";
import {useState, useEffect, useContext, inputValue} from "react";
import WishListContext from "../../Context/WishListContext";

const Dashboard = () => {
    const {onInputChange, addItem, inputValue} = useContext(WishListContext);
    
    //import images
    const imgUrl = require("../../Images/parchment.png");
    const deviderUrl = require("../../Images/devider.png");

    return(
        <section className="dashboardContainer">
           <div className="parchment">
                <img className="parchment_img" src={imgUrl}  alt="" />
                <div className="parchment__content">
                    <div className="parchment__top">
                        <img className="parchment__devider" src={deviderUrl} alt="devider" />
                        <h1 className="parchment__title">Wishlist</h1>
                    </div>
                    <List/>
                    <form onSubmit={addItem} className="parchment__form" action="">    
                        <input onChange={onInputChange} value={inputValue} className="parchment__input" placeholder="New item" type="text" />
                        <button className="parchment__button">Submit</button>
                    </form>
                    <img className="parchment__devider--bottom" src={deviderUrl} alt="devider" />
                </div>
           </div>
        </section>
    )
}

export default Dashboard;