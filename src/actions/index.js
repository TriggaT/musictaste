
export const getPlaylists = () => {
    return dispatch => {
        fetch("/playlists")
        .then(r => r.json())
        .then(playlists => { 
            dispatch({type: 'SET_PLAYLISTS', playlists})}
        )
        
    }
}

export const addPlaylist = (playlist, history) => {
    const playlistData = {
        name: playlist.name, 
        description: playlist.description
    }
    
    return dispatch => {
        fetch("/playlists", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playlistData)
        })
        .then(r => r.json())
        .then(playlist => {
            dispatch({type: 'ADD_PLAYLIST', playlist})
            history.push("/playlists")
        })
    }
}

export const getSongs = () => {
    return dispatch => {
        // dispatch({ type: 'LOADING_SONGS'})
        fetch("/songs")
        .then(r => r.json())
        .then(songs => {
            dispatch({type: 'SET_SONGS', songs})}
        )
        
    }
}



export const addSong = (song, id, history) => {
    const songData = {
        title: song.title, 
        artist: song.artist,
        playlist_id: id
    }

    
    
    return dispatch => {
        fetch("/songs", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songData)
        })
        .then(r => r.json())
        .then(song => {
            console.log(song)
            dispatch({type: 'ADD_SONG', song})
            history.push(`playlists/${id}`)
        })
    }
}