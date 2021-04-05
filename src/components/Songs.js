import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getSongs} from '../actions/index'

class Songs extends Component {
    componentDidMount = () => {
        console.log(this.props.songs)
    }



    render() {
        return (
            <div>
                <h3>Songs</h3>
                <ol>
                    {this.props.songs.map(song => 
                        <li key={song.title}>
                            <strong>Title:</strong> {song.title} <br /> 
                            <strong>Artist:</strong> {song.artist}
                        </li>)} 
                </ol>

                <NavLink to="/songs/new">Add New Song</NavLink>
                
            </div>
        )
    }
}

export default connect((state) => ({songs: state.songs}), {getSongs})(Songs)
