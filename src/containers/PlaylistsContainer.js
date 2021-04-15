import React, { Component } from 'react'
import {getPlaylists, getSongs, getReviews} from '../actions/index'
import {Switch, Route} from 'react-router-dom';
import Playlist from "../components/playlists/Playlist"
import ListPlaylists from "../components/playlists/ListPlaylists"
import {connect} from 'react-redux'
import PlaylistForm from '../components/playlists/PlaylistForm';
import Button from '@material-ui/core/Button';


export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
        this.props.getSongs()
        this.props.getReviews()
    }
    

    render() {
        const {playlists, match, history, currentUser, loading} = this.props;

        const renderPlaylistButton = () => {
            if(JSON.stringify(currentUser) !== "{}"){
                return  (
                <Button  onClick={() => history.push("/playlists/new")}variant="contained">
                New Playlist
                </Button> 
                )
            }
        }
         
        return (
            <div>
                <h2>Playlists</h2>
                <ListPlaylists playlists={playlists} loading={loading} history={history} /> 
                <br />
                {renderPlaylistButton()}
            
                <Switch>
                <Route path="/playlists/new" component={PlaylistForm} />
                <Route path={`${match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} /> }/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        currentUser: state.currentUser,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { getPlaylists, getSongs, getReviews})(PlaylistsContainer)


