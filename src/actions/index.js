export const createUser = (user, history) => {
    const userData = {
        username: user.username, 
        password: user.password
    }

    return dispatch => {
        fetch("/users", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            
            let user = {id: data.user.id, username: data.user.username}
            dispatch({type: 'SET_USER', user})
            alert("Thanks for signing up! We look forward to your MusicTaste.")
            history.push("/")
        })
    }

}

export const logInUser = (user, history) => {
    const userData = {
        username: user.username, 
        password: user.password
    }

    return dispatch => {
        fetch("/login", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(data => {
            if (data.failure) {
                alert(data.failure) 
            }
            localStorage.setItem("token", data.jwt)

            let user = {id: data.user.id, username: data.user.username}

            dispatch({type: 'SET_USER', user})
            history.push("/")
        })
    }

}

export const logOutUser = (history) => {

    return dispatch => {
        localStorage.removeItem("token")
        dispatch({type: 'REMOVE_USER'}) 
        history.push("/login")
    }

}


export const userLoggedIn = () => {
    const token = localStorage.getItem("token")
    
    if(token){
        return dispatch => {
            fetch("/auto_login", {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(r => r.json())
            .then(data => {
                let user = {id: data.id, username: data.username}
                dispatch({type: 'SET_USER', user})
                
            })
        }
    }
    
    return dispatch => {
        dispatch({type: 'REMOVE_USER'}) 
    } 
    

}


export const getPlaylists = () => {
    return dispatch => {
        dispatch({ type: 'LOADING'})
        fetch("/playlists")
        .then(r => r.json())
        .then(playlists => { 
            dispatch({ type: 'NOT_LOADING'})
            dispatch({type: 'SET_PLAYLISTS', playlists})}
        )   
    }
}


export const addPlaylist = (playlist, id, history) => {
    const playlistData = {
        name: playlist.name, 
        description: playlist.description,
        user_id: id
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
        dispatch({ type: 'LOADING'})
        fetch("/songs")
        .then(r => r.json())
        .then(songs => {
            dispatch({ type: 'NOT_LOADING'})
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
            dispatch({type: 'ADD_SONG', song})
            history.push(`/playlists/${id}`)
        })
    }
}

export const getReviews = () => {
    return dispatch => {
        dispatch({ type: 'LOADING'})
        fetch("/reviews")
        .then(r => r.json())
        .then(reviews => {
            dispatch({ type: 'NOT_LOADING'})
            dispatch({type: 'GET_REVIEWS', reviews})}
        )
    }
}

export const addReview = (review, id, currentUserId, history) => {
    const reviewData = {
        rating: parseInt(review.rating), 
        text: review.text,
        playlist_id: id,
        user_id: currentUserId
    }

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
            dispatch({type: 'ADD_REVIEW', review})
            history.push(`/playlists/${id}`)
        })
    }
}



