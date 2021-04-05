


const manageSongs = (state = {songs: [], loading: true}, action) => {
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

export default manageSongs