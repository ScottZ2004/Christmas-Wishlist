import './App.css';
import {Routes, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
  );
}

export default App;
