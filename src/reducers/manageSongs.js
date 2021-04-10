import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: managePlaylist,
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

function managePlaylist(state = [], action){
    switch(action.type){
        case "SET_PLAYLISTS":
            return state = action.playlists
        case "ADD_PLAYLIST":
            return [...state, action.playlist]
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
            return [...state, action.song]
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

