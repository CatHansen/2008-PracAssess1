import { dataFetcher } from "./../../utils/dataFetcher";
import listItemTemplate from "./../../templates/listItemTemplate";
import render from "./../../utils/render"
import makeElement from "../../utils/makeElement";

const toDoList = async function () {
    const root = document.createElement('div')
    //const root = document.querySelector('#app')
    const itemData = await dataFetcher('toDo.json')
    
    for (idx = 0; idx < itemData.length; idx += 1){
    const listItem = render(listItemTemplate, itemData[idx])
    const category = itemData[idx].category;
    listItem.classList.add(category);

    //console.log(listItem.classList)

    root.appendChild(listItem)
    }
    console.log(root)
    return root
    // return await itemData.json()

}

export default toDoList