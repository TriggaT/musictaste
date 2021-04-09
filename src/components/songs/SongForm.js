import React, { Component } from 'react'
import {addSong} from '../../actions/index'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        this.props.addSong(this.state, this.props.playlistId, this.props.history)
        this.setState({
            title: "",
            artist: ""
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="standard-basic" name="title" label="Title" value={this.state.title} onChange={this.handleChange} /><br/> 
                    <TextField id="standard-basic" name="artist" label="Artist" value={this.state.artist} onChange={this.handleChange} /><br/> <br /> 
                    <Button type="submit" variant="outlined" >Add Song</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addSong})(SongForm)
