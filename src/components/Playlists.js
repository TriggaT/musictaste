import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "./Playlist"

class Playlists extends Component {
    


    render() {
        return (
            <div>
                 {/* <Route path="/playlists/:id" component={({match}) => <Playlist {...props} /> }/> */}
                {this.props.playlists.map(playlist => 
                    <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>)} 
                
                
            </div>
        )
    }
}



export default Playlists
