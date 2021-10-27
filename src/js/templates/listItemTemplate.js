import makeElement from "../utils/makeElement"

const listItemTemplate = function({id, category, title, isComplete}){
    
    const template =
    `
        <ul class="toDoItem ${category}" data-key="${id}">
            <li>Category: ${category}</li>
            <li>Title: ${title}</li>
            <li>Complete: ${isComplete}</li>
            <li>Date: *Placeholder*</li>
            <li></li>
        </ul>
    `
    return makeElement(template)
}

export default listItemTemplate