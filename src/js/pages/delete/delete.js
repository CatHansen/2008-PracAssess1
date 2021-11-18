import button from "../../components/buttons/button"
import { Router } from "../../router/router"
import { getStore } from "../../redux/store"
import makeElement from "../../utils/makeElement"
import reducer from "../../redux/reducers"


const cancelButton = makeElement(button("cancel"))
const deleteButton = makeElement(button("delete"))

const deletePage = function(props){
    const page = document.createElement('div')

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
            <h1>Delete Employee</h1>
            <p>Remove Employee</p> 
            <div></div>
        </main>
        `

    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete) 
    deleteButton.addEventListener('click', onDeleteTask) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page
}

export default deletePage