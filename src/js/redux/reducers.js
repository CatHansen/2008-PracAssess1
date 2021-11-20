import {getStore, updateStore} from './store';

function reducer (action){
    let store = getStore();
    let index = action.payload.index;
    let newStore = store;
    switch(action.type){
        case "delete":
            // grabbing the current store
            newStore = [...store.slice(0,index), ...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
        return "remove task";
        case "edit":
            newStore = [...store.slice(0,index), ...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
        return "edit task";
        case "add":
            const newItem = action.payload.addTask
            console.log(newItem)
            newStore = [...store, newItem]
            updateStore(newStore)
            action.cb()
        return "add new task";
        default: return store
    }
}

export default reducer