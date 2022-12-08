import {createContext, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const WishListContext = createContext();

export const WishListProvider = ({children}) => {
    const navigate = useNavigate();
    // login page states and functions
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
        id: null
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

    const logIn = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('users/login', logInValues);
            setUser({
                isLoggedIn: true,
                id: response.data.id
            });

            if(response.data.id !== undefined){
                navigate("/");
            }
            else{
                setErrors({
                    error: response.data.error
                })
            }
        }
        catch(e){
            
        }
    }

    const signUp = async(e) => {
        e.preventDefault();
        try{
            await axios.post('users/register', signUpValues);
            navigate('/login');
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }

    // states and functions for wishlist
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editMode, setEditMode] = useState({
        isOn: false,
        id: null
    });
    const [editModeInputValues, setEditModeInputValues] = useState("")

    const getList = async () => {
        const response = await axios.get('/wishList');
        setList(response.data.data);
    }

    const setDone = async (e) => {
        const targetItem = list[e.target.id - 1];
        const itemToBeSend = {
            name: targetItem.name,
            done: !targetItem.done
        }
        try{
            await axios.put('/wishList/' + e.target.id, itemToBeSend)
        }
        catch{
            console.log("couldn't update");
        }
        getList();
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addItem = async (e) => {
        e.preventDefault();
        const itemsToBeSend = {
            name: inputValue,
            user_id: user.id
        }
        try{
            await axios.post('/wishList', itemsToBeSend);
        }
        catch(e){
            console.log("couldn't send");
        }
        getList();
        setInputValue("");
    }

    const getSelectedItem = (id) => {
        
    }

    const toggleEditMode = (e) => {
        setEditMode({
            isOn: !editMode.isOn,
            id: e.target.id
        });
        const selectedItem = list.filter(item => {
            if(item.id == e.target.id){
                return item
            }
        });
        setEditModeInputValues(selectedItem[0].name)
    }

    const onChangeEditMode = (e) => {
        setEditModeInputValues(e.target.value)
    }

    const saveItem = async() => {
        const selectedItem = list.filter(item => {
            if(item.id == editMode.id){
                return item
            }
        });
        const itemsToBePassed = {
            name: editModeInputValues,
            done: selectedItem[0].done
        }
        console.log( selectedItem[0].done)
        try{
            await axios.put('wishList/' + editMode.id, itemsToBePassed);
            getList();
        }catch(e){
            if(e.response.status === 422){
                console.log(e)
            }
        }
        
        setEditMode({
            isOn: !editMode.isOn,
            id: null
        });
        setEditModeInputValues("");
        
    }

    return <WishListContext.Provider value={{
        onSignUpChange,
        errors,
        onLoginChange,
        logIn,
        user,
        signUp,
        list,
        setList,
        getList,
        setDone,
        onInputChange,
        addItem,
        inputValue,
        toggleEditMode,
        editMode,
        saveItem,
        onChangeEditMode,
        editModeInputValues

    }}>{children}</WishListContext.Provider>
}

export default WishListContext;