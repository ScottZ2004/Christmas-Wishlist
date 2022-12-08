import "./List.css";
import WishListContext from "../../Context/WishListContext";
import {useContext, useEffect} from "react";

export default function List(props) {
  const {user, list, setDone, getList, toggleEditMode} = useContext(WishListContext);
  useEffect(() => {
    getList()
  }, [])
  const listItems = list.map(item => {
    if(user.id === item.user_id){
      let className = "list__item";
      if(item.done){
        className = "list__item--done";
      }
      return <li 
        key={item.id}
        className="list__itemWrapper"
        ><p id={item.id} onClick={setDone} className={className}>{item.name}</p> <button onClick={toggleEditMode} id={item.id} className="list__button">Edit</button>
      </li>
    }   
  });

  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}
