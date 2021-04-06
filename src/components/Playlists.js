import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getPlaylists} from '../actions/index'

class Playlist extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }


    render() {
        console.log(this.props.playlists)
        return (
            <div>
                {this.props.playlists.map(playlist => 
                    <NavLink  playlist={playlist}>{playlist.name}</NavLink> )} 
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists
    }
}


export default connect(mapStateToProps, { getPlaylists })(Playlist)
