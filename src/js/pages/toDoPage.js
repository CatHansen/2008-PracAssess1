import dolphin from "./../icons/dolphin";
import title from "../components/header/title";
import button from "./../components/buttons/button";
import makeElement from "./../utils/makeElement";
import toDoList from "./../components/toDoList/toDoList";
import listTemplate from "../templates/listTemplate";
import listItemTemplate from "../templates/listItemTemplate";
import { getStore } from "../redux/store";

const toDoPage = function(){
    const todoListStore = getStore()
    const pageBody = document.createElement('div')
    const container = listTemplate()
    
    //const pageHeader = document.createElement('header')
    //const toDoData = await toDoList()
    
    // const root = document.querySelector('#app')
    // const pageHeader = document.createElement('header')

    if(todoListStore !== null){
        const ul = container.querySelector('ul')
        const elements = todoListStore.map(li => listItemTemplate(li))
        elements.forEach(element => ul.append(element))
        pageBody.append(container)
    }

    // pageHeader.classList.add('to-do-app')
    // pageHeader.appendChild(makeElement(dolphin()))
    // pageHeader.appendChild(makeElement(title('Splash Tasks')))
    // pageBody.appendChild(pageHeader)

    // pageBody.appendChild(toDoData)
    return pageBody

}

export default toDoPage