export function todoReducer(state,action){
    switch (action.type){
        case "add":
            return[...state,action.payload]
        case "delete":
            
        case "edit":

        default:
    }
}