import button from "../../components/buttons/button"
import { Router } from "../../router/router"
import { getStore } from "../../redux/store"
import makeElement from "../../utils/makeElement"
import reducer from "../../redux/reducers"
import listItemTemplate from "../../templates/listItemTemplate"


const cancelButton = makeElement(button("cancel"))
const deleteButton = makeElement(button("delete"))


const deletePage = function(props){
    const page = document.createElement('div')
    page.classList.add('deletePage')

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)
        deleteButton.removeEventListener('click', onDeleteTask)
    }
    
    function onCancelDelete (e){
        cleanUp()
        Router('/todo')
    }

    function onDeleteTask (e){
        if(props !== null){
            Router('/todo')
            const deleteTask = props
            const index = getStore().findIndex(task=> task.id === deleteTask.id)
            
            const action = {
                type: "delete",
                payload:{index},
                cb:()=> Router('/todo')
            }
            reducer(action)
            cleanUp()
        }
    }

    let headerTemplate = `
        <main class="welcome center-in-page">
            <h1 class="deleteTitle">Delete Task?</h1>
            <div></div>
        </main>
        `

    const pageHeader = makeElement(headerTemplate)
    const pageDiv = pageHeader.querySelector('div')
    pageHeader.querySelector('div').innerHTML = ''
    if(props !== null){
        const thisTask = props
        let wholeTask = getStore().find(task=> task.id === thisTask.id)
        pageDiv.append(listItemTemplate(wholeTask))
        }
    cancelButton.addEventListener('click', onCancelDelete) 
    deleteButton.addEventListener('click', onDeleteTask) 
    pageDiv.append(cancelButton, deleteButton)
    
    page.append(pageHeader)

    return page
}

export default deletePage