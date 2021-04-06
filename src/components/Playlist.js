import React, { Component } from 'react'
import Songs from "./Songs"
import { NavLink } from 'react-router-dom';

class Playlist extends Component {
    render() {
        const {playlists, match, songs} = this.props

        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId))
        
        const associatedSongs = songs.filter(song => song.playlist_id === playlist.id)



        return (
            <>
            <h3>{playlist.name}</h3>
            <h4>{playlist.description}</h4>
            <Songs songs={associatedSongs} /> 

            {/* <h3>Songs</h3>
                <ol>
                    {associatedSongs.map(song => 
                        <Song  song={song} />  )
                    } 
                </ol>

                <NavLink to={`playlists/${playlist.id}/songs/new`}>Add New Song</NavLink> */}
                
            </>
        )
    }
}

export default Playlist
