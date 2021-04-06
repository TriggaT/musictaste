import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getPlaylists} from '../actions/index'

class Playlist extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }


    render() {
        // console.log(this.props.playlists)
        return (
            <div>
                {/* {this.props.playlists.map(playlist => 
                    <NavLink  playlist={playlist}>{playlist.name}</NavLink> )}  */}
                
                
            </div>
        )
    }
}


export default connect(null, { getPlaylists })(Playlist)
