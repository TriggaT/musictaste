export const addSong = (title, artist) => ({
    type: "ADD_SONG",
    title,
    artist
})

export const getSongs = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_SONGS'})
        fetch("/songs")
        .then(r => r.json())
        .then(songs => {
            dispatch({type: 'SET_SONGS', songs})}
        )
        
    }

}