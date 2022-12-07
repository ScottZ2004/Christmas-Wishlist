import {createContext, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const WishListContext = createContext();

export const WishListProvider = ({children}) => {
    const navigate = useNavigate();
    
    const [signUpValues, setSignUpValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [logInValues, setLogInValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        isLoggedIn: false,
        user_id: null
    });

    const onSignUpChange = (e) => {
        setSignUpValues({
            ...signUpValues,
            [e.target.id]: e.target.value,
        });
    }

    const onLoginChange = (e) => {
        setLogInValues({
            ...logInValues,
            [e.target.id]: e.target.value
        })
    }

    
      
      const logIn = async(info) => {
        info.preventDefault();
        try{
          const response = await axios.post('users/login', info);
          setUser({
            isLoggedIn: true,
            user_id: response.data.id
          });
          navigate("/")
        }
        catch(e){
          if(e.response.status === 422){
            setErrors(e.response.data.errors);
            }
        }
        
      }

    const signUp = async(e) => {
        e.preventDefault();
        try{
            await axios.post('users/register', signUpValues);
            const infoToBePassed = {
                email: signUpValues.email,
                password: signUpValues.password
            }
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    return <WishListContext.Provider value={{onSignUpChange, errors, onLoginChange}}>{children}</WishListContext.Provider>
}

export default WishListContext;