import makeElement from "../utils/makeElement"
import trash from "../icons/trash"
import edit from "../icons/edit"

const listItemTemplate = function({id, category, title, isComplete}){
    
    const template =
`
<li class="toDoItem ${category}" data-key="${id}">  
    <ul class="flex">    
        <li>
            <ul>
                <li>Category: ${category}</li>
                <li>Title: ${title}</li>
                <li>Complete: ${isComplete}</li>
                <li>Date: *Placeholder*</li>
            </ul>
        </li>
        <li>
            <div>
                <button class="delete">${trash()}</button>
                <button class="edit">${edit()}</button>
            </div>
        </li>
    </ul>
</li>
`
    return makeElement(template)
}


export default listItemTemplate
