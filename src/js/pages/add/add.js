import button from "../../components/buttons/button"
import { Router } from "../../router/router"
import { getStore } from "../../redux/store"
import makeElement from "../../utils/makeElement"
import reducer from "../../redux/reducers"


const cancelButton = makeElement(button("cancel"))
const addButton = makeElement(button("add"))

const addPage = function(props){
    const page = document.createElement('div')

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelAdd)
        addButton.removeEventListener('click', onAddTask)
    }
    
    function onCancelAdd (e){
        cleanUp()
        Router('/todo')
    }

    function onAddTask (e){

        if(props !== null){
            const thisId = props
            const thisCategory = document.getElementById("category").value
            const thisIsComplete = document.getElementById("isComplete").checked
            const thisTitle = document.getElementById("title").value
            const thisStartDate = document.getElementById("startDate").value
            const thisStartTime = document.getElementById("startTime").value
            const thisEndDate = document.getElementById("endDate").value
            const thisEndTime = document.getElementById("endTime").value

            const addTask = {
                id: thisId,
                category: thisCategory,
                idComplete: thisIsComplete,
                title: thisTitle,
                startDate: thisStartDate,
                startTime: thisStartTime,
                endDate: thisEndDate,
                endTime: thisEndTime
            }
            console.log(addTask)
            // const index = getStore().findIndex(task=> task.id === addTask.id)
            // const changeTask = getStore().find(task=> task.id === addTask.id)
            Router('/todo')
            const action = {
                type: "add",
                payload: {addTask},
                cb:()=> Router('/todo')
            }
            reducer(action)
            cleanUp()
        }
    }

    let headerTemplate = `
        <main class="welcome center-in-page">
            <h1>Add New Task</h1>
            <div>
                
            </div>
        </main>
        `

    let newItemForm = `
        <form action="">
            <label for="idCode">ID</label>
            <input type="text" id="idCode" name="idCode" disabled="true" value="${props}">
            <br/>
            <label for="category">Category</label>
            <select id="category" name="category">
                <option value="school">School</option>
                <option selected value="home">Home</option>
                <option value="work">Work</option>
                <option value="fun">Fun</option>
                <option value="family">Family</option>
            </select>
            <br/>
            <label>Completed</label>
            <input type="checkbox" id="isComplete">
            <br/>
            <label for="title">To Do</label>
            <input type="text" id="title" name="title" value="">
            <br/>
            <label for="startDate">Start Date</label>
            <input type="Date" id="startDate" name="startDate" value="">
            <br/>
            <label for="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" value="">
            <br/>
            <label for="endDate">End Date</label>
            <input type="Date" id="endDate" name="endDate" value="">
            <br/>
            <label for="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" value="">
            <br/>
        </form>
        `
    

    const pageHeader = makeElement(headerTemplate)
    const pageForm = makeElement(newItemForm)
    const pageDiv = pageHeader.querySelector('div')
    pageDiv.innerHTML = ''
    pageDiv.append(pageForm)
    // const newTask = 
    // let wholeTask = getStore().find(task=> task.id === newTask.id)
    //     pageDiv.append(editForm(wholeTask))
    
    cancelButton.addEventListener('click', onCancelAdd) 
    addButton.addEventListener('click', onAddTask) 
    pageDiv.append(cancelButton, addButton)
    page.append(pageHeader)

    return page
}

export default addPage