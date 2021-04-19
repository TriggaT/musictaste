function managePlaylists(state = [], action){
    switch(action.type){
        case "SET_PLAYLISTS":
            return state = action.playlists
        case "ADD_PLAYLIST":
            return [...state, action.playlist]
        default:
            return state;
    }

}

export default managePlaylists;