
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

export const getReviews = () => {
    return dispatch => {
        fetch("/reviews")
        .then(r => r.json())
        .then(reviews => {
            dispatch({type: 'GET_REVIEWS', reviews})}
        )
    }
}

export const addReview = (review, id, history) => {
    const reviewData = {
        rating: parseInt(review.rating), 
        text: review.text,
        playlist_id: id
    }

    console.log(reviewData)

    return dispatch => {
        fetch("/reviews", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(r => r.json())
        .then(review => {
            console.log(review)
            dispatch({type: 'ADD_REVIEW', review})
            history.push(`playlists/${id}`)
        })
    }
}

