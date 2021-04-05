import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getSongs} from '../actions/index'

class Songs extends Component {
    componentDidMount = () => {
        console.log(this.props.getSongs())
    }



    render() {
        if (this.props.loading){
            return (
                <>
                <h3>Songs</h3>
                <h4>Loading...</h4>
                </>

            )
        }
        return (
            <div>
                <h3>Songs</h3>
                <ol>
                    {this.props.songs.map(song => 
                        <li key={song.id}>
                            <strong>Title:</strong> {song.title} <br /> 
                            <strong>Artist:</strong> {song.artist}
                        </li>)} 
                </ol>

                <NavLink to="/songs/new">Add New Song</NavLink>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {getSongs})(Songs)
