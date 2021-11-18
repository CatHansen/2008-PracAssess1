import {getStore, updateStore} from './store';

function reducer (action){
    switch(action.type){
        case "delete":
            case "delete":
            // grabbing the current store
            const store = getStore();
            const index = action.payload.index;
            const newStore = [...store.slice(0,index), ...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
        return "remove task";
        case "edit":
        return "edit task";
        case "add":
        return "add new task";
        default: return store
    }
}

export default reducer