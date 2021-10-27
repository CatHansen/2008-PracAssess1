import { createStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import { Router } from "./router/router";


const storeInit = async function (e) {
    let toDoList = await dataFetcher('toDo.json')
    
    createStore(toDoList)
    Router(window.location.pathname)
}

window.addEventListener('load', storeInit)



