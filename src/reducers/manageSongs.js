


const manageSongs = (state = {songs: [], loading: true}, action) => {
    switch(action.type) {
        case 'LOADING_SONGS':
            return {...state, 
            loading: true }
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