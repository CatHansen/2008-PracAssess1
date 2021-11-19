import makeElement from '../utils/makeElement'

const editForm = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime}){
    const template = 
    `
    <form action="">
            <label for="idCode">ID</label>
            <input type="text" id="idCode" name="idCode" disabled="true" value="${id}">
            <br/>
            <label for="category">Category</label>
            <select id="category" name="category" selected="${category}">
                <option value="">Category</option>
                <option value="school">School</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="fun">Fun</option>
                <option value="family">Family</option>
            </select>
            <br/>
            <label>Completed</label>
            <input type="checkbox" id="isComplete">
            <script>
                document.getElementById("isComplete").checked = ${isComplete}
            </script>
            <br/>
            <label for="title">To Do</label>
            <input type="text" id="title" name="title" value="${title}">
            <br/>
            <label for="startDate">Start Date</label>
            <input type="Date" id="startDate" name="startDate" value="${startDate}">
            <br/>
            <label for="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" value="${startTime}">
            <br/>
            <label for="endDay">End Date</label>
            <input type="Date" id="endDay" name="endDay" value="${endDate}">
            <br/>
            <label for="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" value="${endTime}">
            <br/>
        </form>
    `

    return makeElement(template)
}

export default editForm