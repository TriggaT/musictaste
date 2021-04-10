import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {getSongs, userLoggedIn} from '../actions/index'
import {getReviews} from '../actions/index'
import {Switch, Route} from 'react-router-dom';
import Playlist from "../components/playlists/Playlist"
import ListPlaylists from "../components/playlists/ListPlaylists"
import {connect} from 'react-redux'
import PlaylistForm from '../components/playlists/PlaylistForm';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
        this.props.getSongs()
        this.props.getReviews()
        this.props.userLoggedIn()
    }
    

    render() {
         
        return (
            <div>
                <h3>Playlists</h3>
                <ListPlaylists playlists={this.props.playlists} loading={this.props.loading} history={this.props.history} /> 
                <br />
                <Button  onClick={() => this.props.history.push("/playlists/new")}variant="contained">
                New Playlist
                </Button> 

                <Switch>
                <Route path="/playlists/new" component={PlaylistForm} />
                <Route path={`${this.props.match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} songs={this.props.songs} reviews={this.props.reviews} /> }/>
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        songs: state.songs,
        reviews: state.reviews,
        currentUser: state.currentUser,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { getPlaylists, getSongs, getReviews, userLoggedIn})(PlaylistsContainer)


