import React, { Component } from 'react'
import Song from "./Song"

class Playlist extends Component {
    render() {
        const {playlists, match, songs} = this.props

        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId))
        
        const associatedSongs = songs.filter(song => song.playlist_id === playlist.id)

        console.log(associatedSongs)


        return (
            <>
            <h3>{playlist.name}</h3>
            <h4>{playlist.description}</h4>

            <h3>Songs</h3>
                <ol>
                    {associatedSongs.map(song => 
                        <Song  song={song} />  )
                    } 
                </ol>
                
            </>
        )
    }
}

export default Playlist
