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
                 {/* <Route path="/playlists/:id" component={({match}) => <Playlist {...props} /> }/> */}
                {this.props.playlists.map(playlist => 
                    <NavLink key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>)} 
                
                
            </div>
        )
    }
}



export default ListPlaylists
