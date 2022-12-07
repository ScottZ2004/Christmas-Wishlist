import "./Login.css";
import { useEffect, useContext } from "react";
import WishListContext from "../../Context/WishListContext";

const Login = () => {
    const bgImg_url = require("../../Images/parchment_login.png");
    const {onSignUpChange, errors, onLoginChange} = useContext(WishListContext);
  
    if(window.location.pathname === "/login"){
        return(
            <div className="snow_wrap">
                <div className="snow">
                </div>
                <div className="login__backgroundImg">
                    <div className="login__parchmentWrapper">
                        <img className="login__parchment" src={bgImg_url} alt="" />
                        <form className="login__contentWrapper">
                            <h1 className="login__header">Login</h1>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="email">Email</label>
                                <input onChange={onLoginChange} id="email" className="login__input" type="email" />
                            </div>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input onChange={onLoginChange} id="password" className="login__input" type="password" />
                            </div>  
                            
                            <button className="login__button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }else if(window.location.pathname === "/signup"){
        return(
            <div className="snow_wrap">
                <div className="snow">
                </div>
                <div className="login__backgroundImg">
                    <div className="login__parchmentWrapper">
                        <img className="login__parchment" src={bgImg_url} alt="" />
                        <form className="login__contentWrapper">
                            <h1 className="login__header">Signup</h1>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="name">Name</label>
                                <input onChange={onSignUpChange} id="name" className="login__input" type="text" />
                            </div>  
                            {errors.name && <span className="login__error">{errors.name[0]}</span>}
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="email">Email</label>
                                <input onChange={onSignUpChange} id="email" className="login__input" type="email" />
                            </div>
                            {errors.email && <span className="login__error">{errors.email[0]}</span>}
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input onChange={onSignUpChange} id="password" className="login__input" type="password" />
                            </div>  
                            {errors.password && <span className="login__error">{errors.password[0]}</span>}
                            <button className="login__button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <h1>fallback</h1>
    )
}

export default Login;