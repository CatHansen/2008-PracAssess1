import itemDescription from "./itemDescription";
import itemHeading from "./itemHeading";
import toDoList from "./toDoList";
import listItemTemplate from "./../../templates/listItemTemplate";
import makeElement from "../../utils/makeElement";

const toDoItem = async function (data) {

    for (let item of toDoList){
        makeElement()
        id = item.id
        console.log(id)
    }

    return await itemData.json()
}
    
    // const newItem = document.createElement('div')
    // newItem.classList.add('toDoItem')
    // newItem.appendChild.MakeElement(itemHeading)
    // newItem.appendChild.createElement(itemDescription)




export default toDoItem