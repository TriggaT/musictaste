import React, { Component } from 'react'

class Playlist extends Component {
    render() {
        const {playlists, match} = this.props

        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId)) 
        
        return (
            <>
            <h3>{playlist.name}</h3>
            <h4>{playlist.description}</h4>
                
            </>
        )
    }
}

export default Playlist
