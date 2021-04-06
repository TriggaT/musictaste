import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "../components/Playlist"
import Playlists from "../components/Playlists"
import {connect} from 'react-redux'

export class PlaylistsContainer extends Component {
    render() {
        return (
            <div>
            
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists
    }
}


export default connect(mapStateToProps, { getPlaylists })(PlaylistsContainer)


