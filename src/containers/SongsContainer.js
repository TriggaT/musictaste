import React, { Component } from 'react'
import Songs from "../components/Songs"
import {Switch, Route} from 'react-router-dom';
import SongForm from "../components/SongForm";

export default class SongsContainer extends Component {
    

    render() {
        const { songs, playlistId, match } = this.props; 
        return (
            <div>
                
             
                <Songs songs={songs} playlistId={playlistId} match={match}/> 
                <br /> 
               
                <Route path={`/playlists/${playlistId}/songs/new`} render={routerProps => <SongForm {...routerProps} playlistId={playlistId}  /> }/>


                

                 

                
        
                
                
                
            
                
            </div>
        )
    }
}


