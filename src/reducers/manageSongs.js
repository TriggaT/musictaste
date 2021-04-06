import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: managePlaylist,
    songs: manageSongs
    // loading: manageLoad 
});
  
export default rootReducer;

function manageLoad(state = false, action){
    switch(action.type){
        // case "NOT_LOADING":
        //     return state = false 
        default:
            return state;
    }

}

function managePlaylist(state =[], action){
    switch(action.type){
        default:
            return state;
    }

}


function manageSongs(state = [], action){
    switch(action.type) {
        // case 'LOADING_SONGS':
        //     return [...state] 
        //     // loading: true }
        case "SET_SONGS":
            
            return state = action.songs
            
        case "ADD_SONG":
            return [state, action.song]
        default:
            return state;
    }
}

