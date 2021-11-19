import button from "../../components/buttons/button"
import { Router } from "../../router/router"
import { getStore } from "../../redux/store"
import makeElement from "../../utils/makeElement"
import reducer from "../../redux/reducers"
import editForm from "../../templates/editItemForm"


const cancelButton = makeElement(button("cancel"))
const editButton = makeElement(button("edit"))

const editPage = function(props){
    const page = document.createElement('div')

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelEdit)
        editButton.removeEventListener('click', onEditTask)
    }
    
    function onCancelEdit (e){
        cleanUp()
        Router('/todo')
    }

    function onEditTask (e){
        if(props !== null){
            Router('/todo')
            const editTask = props
            const index = getStore().findIndex(task=> task.id === editTask.id)
            const changeTask = getStore().find(task=> task.id === editTask.id)
            const action = {
                type: "edit",
                payload:{index},
                cb:()=> Router('/todo')
            }
            reducer(action)
            console.log(changeTask)
            cleanUp()
        }
    }

    let headerTemplate = `
        <main class="welcome center-in-page">
            <h1>Edit Employee</h1>
            <div></div>
        </main>
        `

    const pageHeader = makeElement(headerTemplate)
    const pageDiv = pageHeader.querySelector('div')
    pageDiv.innerHTML = ''
    if(props !== null){
        const thisTask = props
        let wholeTask = getStore().find(task=> task.id === thisTask.id)
        let isChecked = wholeTask.isComplete
        pageDiv.append(editForm(wholeTask))
        }
    
    cancelButton.addEventListener('click', onCancelEdit) 
    editButton.addEventListener('click', onEditTask) 
    pageDiv.append(cancelButton, editButton)
    page.append(pageHeader)

    return page
}

export default editPage