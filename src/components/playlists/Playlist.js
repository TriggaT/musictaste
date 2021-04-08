import React, { Component } from 'react'
import SongsContainer from "../../containers/SongsContainer";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Playlist extends Component {
    render() {
        const {playlists, match, songs, reviews} = this.props;
        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId));

        const associatedSongs = songs.filter(song => song.playlist_id === playlist.id);
        const associatedReviews = reviews.filter(review => review.playlist.id === playlist.id);

        
        
        return (
            <>
            <h3>{playlist.name} created by {playlist.user.username} </h3>
            <h4>{playlist.description}</h4>
            <SongsContainer songs={associatedSongs} playlistId={playlist.id} match={match}/> 
            <ReviewsContainer reviews={associatedReviews} playlistId={playlist.id} match={match}/>

            </>
        )
    }
}

export default Playlist
