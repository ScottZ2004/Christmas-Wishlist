import "./EditMode.css"
import WishListContext from "../../Context/WishListContext";
import {useContext, useEffect} from "react"

const EditMode = () => {
    const {list, editMode, saveItem, onChangeEditMode} = useContext(WishListContext);

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
            <h2>Edit item</h2>
            <div className="editmode__buttons">
                <button onClick={saveItem}>Save</button>
                <button>Delete</button>
            </div>
            <div className="editmode__inputWrapper">
                <label className="editMode__label" htmlFor="input">Item name</label>
                <input onChange={onChangeEditMode} className="editMode__input" type="text" name="input" defaultValue={item.name} id="input" />
            </div>
        </section>
    )
} 

export default EditMode;