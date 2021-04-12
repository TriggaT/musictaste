import React, { Component } from 'react'
import Songs from "../components/songs/Songs"
import {Route} from 'react-router-dom';
import SongForm from "../components/songs/SongForm";

export default class SongsContainer extends Component {
    

    render() {
        const { songs, playlistId, match, history, currentUser, playlistUserId } = this.props; 
        return (
            <div>
                <Songs songs={songs} match={match} history={history} currentUser={currentUser} playlistUserId={playlistUserId}/> 
                <br /> 
                <Route path={`/playlists/${playlistId}/songs/new`} render={routerProps => <SongForm {...routerProps} playlistId={playlistId}  /> }/>

            </div>
        )
    }
}


