import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ListPlaylists extends Component {
    
    render() {
        if(this.props.loading){
            return (
                <h4>Loading...</h4>

            )
        }
        return (
            <div>
                {this.props.playlists.map(playlist => 
                   <NavLink key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>)
                } 
                <br />
            </div>
        )
    }
}



export default ListPlaylists
