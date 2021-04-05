


const manageSongs = (state = {songs: []}, action) => {
    switch(action.type) {
        case "ADD_SONG":
            const song = {
                title: action.title,
                artist: action.artist
            }

            return {...state,
            songs: [...state.songs, song]
            }
        default:
            return state;
    }
}

export default manageSongs