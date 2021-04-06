import React, { Component } from 'react'
import Songs from "../components/Songs"
import {Route} from 'react-router-dom';

export default class SongsContainer extends Component {
    

    render() {
        const { songs, playlistId, match } = this.props; 
        return (
            <div>
                
             
                <Songs songs={songs} playlistId={playlistId} match={match}/> 
                <br /> 

                
                {/* <Route exact path={this.props.match.url} render={() => <h4>Choose any of the above playlist</h4>}/> */}
                
                
                
            
                
            </div>
        )
    }
}


