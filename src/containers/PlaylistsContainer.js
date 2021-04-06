import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {Switch, Route} from 'react-router-dom';
import Playlist from "../components/Playlist"
import ListPlaylists from "../components/ListPlaylists"
import {connect} from 'react-redux'
import PlaylistForm from '../components/PlaylistForm';
import { NavLink } from 'react-router-dom';

export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }

    render() {
        return (
            <div>
                
             
                <ListPlaylists playlists={this.props.playlists} /> 
                <br /> 

                <NavLink  to="/playlists/new">New Playlist</NavLink>
                <Switch>
               
                <Route path="/playlists/new" component={PlaylistForm} />
                
                <Route path={`${this.props.match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} playlists={this.props.playlists} /> }/>
                
                </Switch>
                
                {/* <Route exact path={this.props.match.url} render={() => <h4>Choose any of the above playlist</h4>}/> */}
                
                
                
            
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        songs: state.songs
    }
}


export default connect(mapStateToProps, { getPlaylists, getSongs })(PlaylistsContainer)


