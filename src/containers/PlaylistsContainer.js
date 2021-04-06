import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "../components/Playlist"
import Playlists from "../components/Playlists"
import {connect} from 'react-redux'

export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }

    render() {
        return (
            <div>
                <Playlists playlists={this.props.playlists} /> 
                <Route exact path={this.props.match.url} render={() => <h4>Choose any of the above playlist</h4>}/>
                <Route path={`${match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} movies={movies} /> }/>
            
                
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


