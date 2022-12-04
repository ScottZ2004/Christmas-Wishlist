import "./Dashboard.css"

const Dashboard = () => {
    const backGround = require("../../Images/Background.png");
    return(
        <div className="background">
            <img className="background__image" src={backGround} alt="BackGround" />
        </div>
    )
}

export default Dashboard;