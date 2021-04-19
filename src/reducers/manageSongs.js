function manageSongs(state = [], action){
    switch(action.type) {
        case "SET_SONGS":
            return state = action.songs
        case "ADD_SONG":
            return [...state, action.song]
        default:
            return state;
    }
}

export default manageSongs;