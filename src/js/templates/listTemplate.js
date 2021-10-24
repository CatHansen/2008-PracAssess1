import makeElement from '../utils/makeElement'

const listTemplate = function (){
    const template = `
    <div id="todoPage" class="todoPage">
    <header>
        <h2>Splash Tasks</h2>
    </header>
    <ul id="todoList" class="todoList">
     
    </ul>
    <footer>

    </footer>
</div>
    `

    return makeElement(template)
}

export default listTemplate