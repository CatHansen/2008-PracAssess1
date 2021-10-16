const listItemTemplate = function({id, category, title, isComplete}){
    
    const template =
    `
        <ul class="toDo">
            <li>ID: ${id}</li>
            <li>Category: ${category}</li>
            <li>Title: ${title}</li>
            <li>Complete: ${isComplete}</li>
        </ul>
    `
    return template
}

export default listItemTemplate