import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import {useState} from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
function App() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    isLoggedIn: false,
    user_id: null
  });
  
  const logIn = async(info) => {
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
        console.log(e)
    }
    }
    
  }


  return (
    <Routes>
      <Route path="/" element={<Dashboard user_id={user.user_id}/>}/>
      <Route path='/login' element={<Login logInfunction={logIn}/>} />
      <Route path='/signup' element={<Login logInfunction={logIn}/>}/>
    </Routes>
  );
}

export default App;
