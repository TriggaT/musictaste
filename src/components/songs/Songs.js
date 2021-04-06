import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Song from "./Song"

class Songs extends Component {
    render() {
        const { songs, match } = this.props;     
        return (
            <div>
                <h3>Songs</h3>
                <ol>
                    {songs.map(song => 
                        <Song  key={song.id} song={song} />  )} 
                </ol>
                <NavLink to={`${match.url}/songs/new`}>Add New Song</NavLink>
                
            </div>
        )
    }
}

export default Songs
