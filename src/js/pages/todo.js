import { getStore } from "../redux/store";
import dolphin from "../icons/dolphin";
import title from "../components/header/title";
import makeElement from "../utils/makeElement";
import link from "../components/buttons/link";
import listTemplate from "../templates/listTemplate";
import listItemTemplate from "../templates/listItemTemplate";
import { Router } from "../router/router";


const toDoPage = function(){
    const todoListStore = getStore()
    const pageHeader = document.createElement('header')
    const pageBody = document.createElement('div')
    const container = listTemplate()
    
    const titleLine = document.createElement('div')
    pageHeader.classList.add('page-header')
    pageHeader.classList.add('to-do-app')
    titleLine.classList.add('titleDiv')
    titleLine.appendChild(makeElement(dolphin()))
    titleLine.appendChild(makeElement(title('Splash Tasks', 'title')))
    pageHeader.appendChild(titleLine)
    const linkHome = link('Currently: link to home.  Future: ADD button', '/')
    pageHeader.append(linkHome)
    pageBody.appendChild(pageHeader)

    function onDeleteTask (e){
        const taskId = {id:e.currentTarget.dataset.key}
        Router('/delete', taskId)
    }

    function onEditTask (e){
        const taskId = {id:e.currentTarget.dataset.key}
        Router('/edit', taskId)
    }

    if(todoListStore !== null){
        const ul = container.querySelector('ul')
        const elements = todoListStore.map(li => listItemTemplate(li))
        elements.forEach(element => {element.querySelector('#delete').addEventListener('click', onDeleteTask)
            ul.append(element)
        })
        elements.forEach(element => {element.querySelector('#edit').addEventListener('click', onEditTask)
            ul.append(element)
        })
        
        pageBody.append(container)
    }

    // add the delete and edit buttons


    return pageBody

}

export default toDoPage