import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getSongs} from '../actions/index'
import Song from "./Song"

class Songs extends Component {
    // componentDidMount = () => {
    //     this.props.getSongs()
    // }



    render() {
        const { songs, playlistId, match } = this.props; 
        console.log(match.url)

        // if (this.props.loading){ 
            
        //     return (
        //         <>
        //         <h3>Songs</h3>
        //         <h4>Loading...</h4>
        //         </>

        //     )
        // }
        return (
            <div>
                <h3>Songs</h3>
                <ol>
                    {songs.map(song => 
                        <Song  key={song.id} song={song} />  )} 
                </ol>

                <NavLink to={`${match.url}/songs/new`}>Add New Song</NavLink>
                
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         songs: state.songs,
//         loading: state.loading
//     }
// }

export default Songs
