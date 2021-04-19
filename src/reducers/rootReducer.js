import { combineReducers } from "redux";
import managePlaylists from "./managePlaylists"
import manageSongs from "./manageSongs"

const rootReducer = combineReducers({
    playlists: managePlaylists,
    songs: manageSongs,
    reviews: manageReviews,
    currentUser: manageUsers,
    loading: manageLoad 
});
  
export default rootReducer;

function manageLoad(state = true, action){
    switch(action.type){
        case 'LOADING':
            return state = true  
        case "NOT_LOADING":
            return state = false 
        default:
            return state;
    }

}





function manageReviews(state = [], action){
    switch(action.type) {
        case "GET_REVIEWS":
            return state = action.reviews
        case "ADD_REVIEW":
            return [...state, action.review]
        default:
            return state;
    }
}

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


