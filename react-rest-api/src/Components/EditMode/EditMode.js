import "./EditMode.css"
import WishListContext from "../../Context/WishListContext";
import {useContext, useEffect} from "react"

const EditMode = () => {
    const {list, editMode, saveItem, onChangeEditMode, deleteItem} = useContext(WishListContext);

    // useEffect(()=>{
    //     onChangeEditMode()
    // }, [])

    let item = null;
    list.map(listItem => {
        if(listItem.id == editMode.id){
            item = listItem
        }
    })
    return(
        <section className="editmode">
            <div className="editmode__buttons">
                <button className="editmode__button"  onClick={saveItem}>Save</button>
                <button className="editmode__button"  onClick={deleteItem}>Delete</button>
            </div>
            <form onSubmit={saveItem} className="editmode__inputWrapper">
                <label className="editMode__label" htmlFor="input">Item name</label>
                <input onChange={onChangeEditMode} className="editmode__input" type="text" name="input" defaultValue={item.name} id="input" />
            </form>
        </section>
    )
} 

export default EditMode;