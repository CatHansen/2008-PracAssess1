import makeElement from "../utils/makeElement"

const listItemTemplate = function({id, category, title, isComplete}){
    
    const template =
    `
        <ul class="toDoItem">
            <li>ID: ${id}</li>
            <li>Category: ${category}</li>
            <li>Title: ${title}</li>
            <li>Complete: ${isComplete}</li>
        </ul>
    `
    return makeElement(template)
}

export default listItemTemplate