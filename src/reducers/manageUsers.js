function manageUsers(state = {}, action){
    switch(action.type) {
        case "SET_USER":
            return state = action.user 
        case "REMOVE_USER":
            return state = {}
        default:
            return state;
    }
}

export default manageUsers; 