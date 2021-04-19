import { combineReducers } from "redux";
import managePlaylists from "./managePlaylists"
import manageSongs from "./manageSongs"
import manageReviews from "./manageReviews"
import manageUsers from "./manageUsers"

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



