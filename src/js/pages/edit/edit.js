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
    page.classList.add('editPage')

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
            const thisId = props
            const thisCategory = document.getElementById("category").value
            const thisIsComplete = document.getElementById("isComplete").checked
            const thisTitle = document.getElementById("title").value
            const thisStartDate = document.getElementById("startDate").value
            const thisStartTime = document.getElementById("startTime").value
            const thisEndDate = document.getElementById("endDate").value
            const thisEndTime = document.getElementById("endTime").value
            console.log(thisIsComplete)

            const addTask = {
                id: thisId.id,
                category: thisCategory,
                isComplete: thisIsComplete,
                title: thisTitle,
                startDate: thisStartDate,
                startTime: thisStartTime,
                endDate: thisEndDate,
                endTime: thisEndTime
            }
            console.log(addTask)
            
            Router('/todo')
            const editTask = props
            const index = getStore().findIndex(task=> task.id === editTask.id)
            const changeTask = getStore().find(task=> task.id === editTask.id)
            const action = {
                type: "edit",
                payload:{index, addTask},
                cb:()=> Router('/todo')
            }
            reducer(action)
            console.log(changeTask)
            cleanUp()
        }
    }

    let headerTemplate = `
        <main class="welcome center-in-page">
            <h1>Edit Task</h1>
            <div></div>
        </main>
        `

    const pageHeader = makeElement(headerTemplate)
    const pageDiv = pageHeader.querySelector('div')
    pageDiv.innerHTML = ''
    if(props !== null){
        const thisTask = props
        let wholeTask = getStore().find(task=> task.id === thisTask.id)
        pageDiv.append(editForm(wholeTask))
        }
    
    cancelButton.addEventListener('click', onCancelEdit) 
    editButton.addEventListener('click', onEditTask) 
    pageDiv.append(cancelButton, editButton)
    page.append(pageHeader)

    return page
}

export default editPage