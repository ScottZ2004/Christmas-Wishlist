import List from "../List/List";
import "./Dashboard.css";
import {useState, useEffect} from "react";

const Dashboard = () => {
    //import images
    const imgUrl = require("../../Images/parchment.png");
    const deviderUrl = require("../../Images/devider.png");

    //states
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([
        {   
            id: 1,
            name: "car",
            done: false,
        },
        {   
            id: 2,
            name: "fiest",
            done: true,
        },
        {   
            id: 3,
            name: "car",
            done: false,
        },
        {   
            id: 4,
            name: "fiest",
            done: true,
        },
    ]);
    }, []);

    return(
        <section className="dashboardContainer">
           <div className="parchment">
                <img className="parchment_img" src={imgUrl}  alt="" />
                <div className="parchment__content">
                    <div className="parchment__top">
                        <img className="parchment__devider" src={deviderUrl} alt="devider" />
                        <h1 className="parchment__title">Wishlist</h1>
                    </div>
                    <List list={list}/>
                    <form className="parchment__form" action="">    
                        <input className="parchment__input" placeholder="New item" type="text" />
                        <button className="parchment__button">Submit</button>
                    </form>
                    <img className="parchment__devider--bottom" src={deviderUrl} alt="devider" />
                </div>
           </div>


        </section>
    )
}

export default Dashboard;