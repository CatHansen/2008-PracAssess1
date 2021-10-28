import { createStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import { Router } from "./router/router";

// const app = document.querySelector("#app")
// app.innerHTML = "<h1>Is this working?</h1>"


const storeInit = async function (e) {
    let toDoList = await dataFetcher('data/toDo.json')
    
    createStore(toDoList)
    Router(window.location.pathname)
}

window.addEventListener('load', storeInit)



