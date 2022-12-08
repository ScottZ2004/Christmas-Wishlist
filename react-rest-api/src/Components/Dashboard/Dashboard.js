import List from "../List/List";
import EditMode from "../EditMode/EditMode";
import "./Dashboard.css";
import {useEffect, useContext} from "react";
import WishListContext from "../../Context/WishListContext";
import {useNavigate, usenNavigate} from "react-router-dom"

const Dashboard = () => {
    const {user, onInputChange, addItem, inputValue, editMode} = useContext(WishListContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user.isLoggedIn){
            navigate('/login');
        }
    }, [])
    //import images
    const imgUrl = require("../../Images/parchment.png");
    const deviderUrl = require("../../Images/devider.png");
    let list = (
        <>
            <List/>
            <form onSubmit={addItem} className="parchment__form" action="">    
                <input onChange={onInputChange} value={inputValue} className="parchment__input" placeholder="New item" type="text" />
                <button className="parchment__button">Submit</button>
            </form>
        </>
    );
    if(editMode.isOn){
        list = <EditMode/>
    }
    return(
    <section className="dashboardContainer">
        <div className="parchment">
            <img className="parchment_img" src={imgUrl}  alt="" />
            <div className="parchment__content">
                <div className="parchment__top">
                    <img className="parchment__devider" src={deviderUrl} alt="devider" />
                    <h1 className="parchment__title">Wishlist</h1>
                </div>
                {list}
                <img className="parchment__devider--bottom" src={deviderUrl} alt="devider" />
            </div>
        </div>
    </section>
    )
    
    
}

export default Dashboard;