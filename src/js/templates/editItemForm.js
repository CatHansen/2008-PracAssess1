import makeElement from '../utils/makeElement'

const editForm = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime}){
    const template = 
    `
    <form action="">
        <ul>
            <li>
                <label for="idCode">ID</label>
                <input type="text" id="idCode" name="idCode" disabled="true" value="${id}">
            </li>
            <li>
                <label for="category">Category</label>
                <select id="category" name="category" value="${category}">
                    <option value="${category}">${category}</option>
                    <option value="school">School</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="fun">Fun</option>
                    <option value="family">Family</option>
                </select>
            </li>
            <li>
                <label>Completed</label>
                <input type="checkbox" id="isComplete">
                <script>
                    document.getElementById("isComplete").checked = ${isComplete}
                </script>
            </li>
            <li>
                <label for="title">To Do</label>
                <input type="text" id="title" name="title" value="${title}">
            </li>
            <li>
                <label for="startDate">Start Date</label>
                <input type="Date" id="startDate" name="startDate" value="${startDate}">
            </li>
            <li>
                <label for="startTime">Start Time</label>
                <input type="time" id="startTime" name="startTime" value="${startTime}">
            </li>
            <li>
                <label for="endDate">End Date</label>
                <input type="Date" id="endDate" name="endDate" value="${endDate}">
            </li>
            <li>
                <label for="endTime">End Time</label>
                <input type="time" id="endTime" name="endTime" value="${endTime}">
            </li>
        </ul>
    </form>
    `

    return makeElement(template)
}

export default editForm