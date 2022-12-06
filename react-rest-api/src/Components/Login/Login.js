import "./Login.css"
import {useState} from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

const Login = (props) => {
    const bgImg_url = require("../../Images/parchment_login.png");
    const [signUpValues, setSignUpValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [logInValues, setLogInValues] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({});

    const onSignUpChange = (e) => {
        setSignUpValues({
            ...signUpValues,
            [e.target.id]: e.target.value,
        });
    }

    const signUp = async(e) => {
        e.preventDefault();
        try{
            await axios.post('users/register', signUpValues);
            const infoToBePassed = {
                email: signUpValues.email,
                password: signUpValues.password
            }
            props.logInfunction(infoToBePassed);
        } catch(e){
            if(e.response.status === 422){
                setError(e.response.data.errors);
            }
        }
    }

    const LogIn = async(e) => {
        e.preventDefault();
        
        try{
            await axios.post('users/login', logInValues);
            props.logInfunction(logInValues);
        }
        catch(e){
            if(e.response.status === 422){
                setError(e.response.data.errors)
            }
        }
        
    }

    if(window.location.pathname === "/login"){
        return(
            <div className="snow_wrap">
                <div className="snow">
                </div>
                <div className="login__backgroundImg">
                    <div className="login__parchmentWrapper">
                        <img className="login__parchment" src={bgImg_url} alt="" />
                        <form onSubmit={LogIn} className="login__contentWrapper">
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
                        <form onSubmit={signUp} className="login__contentWrapper">
                            <h1 className="login__header">Signup</h1>
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="name">Name</label>
                                <input onChange={onSignUpChange} id="name" className="login__input" type="text" />
                            </div>  
                            {error.name && <span className="login__error">{error.name[0]}</span>}
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="email">Email</label>
                                <input onChange={onSignUpChange} id="email" className="login__input" type="email" />
                            </div>
                            {error.email && <span className="login__error">{error.email[0]}</span>}
                            <div className="login__inputWrapper">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input onChange={onSignUpChange} id="password" className="login__input" type="password" />
                            </div>  
                            {error.password && <span className="login__error">{error.password[0]}</span>}
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