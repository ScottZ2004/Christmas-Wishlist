import "./List.css";
import WishListContext from "../../Context/WishListContext";
import {useContext, useEffect} from "react";

export default function List(props) {
  const {user, list, setDone, getList} = useContext(WishListContext);
  useEffect(() => {
    getList()
  }, [])
  const listItems = list.map(item => {
    if(user.id === item.user_id){
      let className = "list__item";
      if(item.done){
        className = "list__item--done";
      }
      return <li id={item.id} onClick={setDone} key={item.id} className={className}>{item.name}</li>
    }   
  });
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}
