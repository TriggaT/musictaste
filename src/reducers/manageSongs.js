import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: managePlaylist,
    songs: manageSongs,
    loading: manageLoad 
});
  
export default rootReducer;

function manageLoad(state = true, action){
    switch(action.type){
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
        case 'LOADING_SONGS':
            return {...state, 
            loading: true }
        case "SET_SONGS":
            return {...state,
            songs: action.songs,
            loading: false }
        case "ADD_SONG":
            return {...state,
            songs: [...state.songs, action.song]}
        default:
            return state;
    }
}

