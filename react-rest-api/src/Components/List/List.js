import "./List.css"

export default function List(props) {
  const list = props.list.map(item => {
    let className = "list__item";
    if(!item.done){
      className = "list__item--done";
    }
    return <li key={item.id} className={className}>{item.name}</li>
  });
  
  return (
    <ul className="list">
      {list}
    </ul>
  )
}
