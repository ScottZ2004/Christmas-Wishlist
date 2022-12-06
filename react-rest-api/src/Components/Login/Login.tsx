import "./Login.css"

const Login = () => {
    const bgImg_url = require("../../Images/parchment_login.png");
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
                                <input id="email" className="login__input" type="email" />
                            </div>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input id="password" className="login__input" type="password" />
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
                                <label className="login__label" htmlFor="password">Name</label>
                                <input id="password" className="login__input" type="text" />
                            </div>  
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="email">Email</label>
                                <input id="email" className="login__input" type="email" />
                            </div>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input id="password" className="login__input" type="password" />
                            </div>  
                            
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