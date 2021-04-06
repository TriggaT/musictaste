import React, { Component } from 'react'
import {addPlaylist} from '../actions/index'
import {connect} from 'react-redux'

class PlaylistForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPlaylist(this.state, this.props.history)
        this.setState({
            name: "",
            description: ""
        })
    }


    render() {
        return (
            <div>
                <br /> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label><br /> 
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/><br /> 
                    <label htmlFor="description">Description:</label> <br/ > 
                    <input name="description" type="text" value={this.state.description} onChange={this.handleChange}/><br /><br /> 
                    <input type="submit" value="Create Playlist" />
                </form>
                
                
            </div>
        )
    }
}

export default connect(null, {addPlaylist})(PlaylistForm)
