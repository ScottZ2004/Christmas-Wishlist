import "./List.css";
import WishListContext from "../../Context/WishListContext";
import {useContext} from "react";

export default function List(props) {
  const {user, list, getList} = useContext(WishListContext);
  const listItems = list.map(item => {
    if(user.id === item.user_id){
      let className = "list__item";
      if(item.done){
        className = "list__item--done";
      }
      return <li key={item.id} className={className}>{item.name}</li>
    }
  });
  console.log(user.id)
  return (
    <ul className="list">
      {listItems}
    </ul>
  )
}
