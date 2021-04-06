import React, { Component } from 'react'
import {addSong} from '../actions/index'
import {connect} from 'react-redux'

class SongForm extends Component {

    state = {
        title: "",
        artist: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addSong(this.state, this.props.history, this.props.playlistID)
        this.setState({
            title: "",
            artist: ""
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/><br /> 
                    <label htmlFor="artist">Artist:</label>
                    <input name="artist" type="text" value={this.state.artist} onChange={this.handleChange}/><br />
                    <input type="submit" value="Add Song" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addSong})(SongForm)
