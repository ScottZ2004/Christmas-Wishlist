import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import {WishListProvider} from '../Context/WishListContext';
function App() {
  return (
    <WishListProvider>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Login/>}/>
      </Routes>
    </WishListProvider>
  );
}

export default App;
