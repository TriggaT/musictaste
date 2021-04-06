import React, { Component } from 'react'
import SongsContainer from "../../containers/SongsContainer";

class Playlist extends Component {
    render() {
        const {playlists, match, songs} = this.props;
        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId));
        
        const associatedSongs = songs.filter(song => song.playlist_id === playlist.id);
        
        return (
            <>
            <h3>{playlist.name}</h3>
            <h4>{playlist.description}</h4>
            <SongsContainer songs={associatedSongs} playlistId={playlist.id} match={match}/>     
            </>
        )
    }
}

export default Playlist
