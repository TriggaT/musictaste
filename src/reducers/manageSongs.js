const manageSongs = (state = [], action) => {
    switch(action.type) {
        case "ADD_SONG":
            const song = {
                title: action.title,
                artist: action.artist
            }

            return {...state,
            song
        }
        default:
            return state;
    }
}

export default manageSongs