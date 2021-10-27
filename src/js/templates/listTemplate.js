import makeElement from '../utils/makeElement'

const listTemplate = function (){
    const template = 
    `
    <div id="todoPage" class="todoPage">
        <ul id="todoList" class="todoList">
        
        </ul>
    </div>
    `

    return makeElement(template)
}

export default listTemplate