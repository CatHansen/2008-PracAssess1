import makeElement from "../utils/makeElement"
import trash from "../icons/trash"
import edit from "../icons/edit"

const listItemTemplate = function({id, category, title, isComplete, endDate}){
    
    const template =
`
<li class="toDoItem ${category}" data-key="${id}">  
    <ul class="flex">    
        <li>
            <ul>
                <li><b>${title}</b></li>
                <li>Category: ${category}</li>
                <li>Complete: ${isComplete ? 'DONE!' : 'Not yet'}</li>
                <li>Date Due: ${endDate}</li>
            </ul>
        </li>
        <li>
            <div>
                <button id="delete" class="delete" data-key="${id}">${trash()}</button>
                <button id="edit" class="edit" data-key="${id}">${edit()}</button>
            </div>
        </li>
    </ul>
</li>
`
    return makeElement(template)
}


export default listItemTemplate
