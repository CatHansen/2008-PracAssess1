import { dataFetcher } from "./../../utils/dataFetcher";
import listItemTemplate from "./../../templates/listItemTemplate";
import render from "./../../utils/render"

const toDoList = async function () {
    const root = document.querySelector('#list')
    const itemData = await dataFetcher('toDo.json')
    console.log(itemData)
    
    for (idx = 0; idx < itemData.length; idx += 1){
    const list = render(listItemTemplate, itemData[idx])

    root.append(list)
    }
    // return await itemData.json()

}

export default toDoList