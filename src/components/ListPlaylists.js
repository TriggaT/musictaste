import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "./Playlist"

class ListPlaylists extends Component {
    


    render() {
        return (
            <div>
                
                <h3>Playlists</h3>
    
                {this.props.playlists.map(playlist => 
                   <li><NavLink key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink></li>)
                } 
                
                <br /> 
                <NavLink  to="/playlists/new">Create New Playlist</NavLink>



                
                
                
                
                
            </div>
        )
    }
}



export default ListPlaylists
