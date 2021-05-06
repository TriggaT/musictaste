import React, { Component } from 'react'
import {addPlaylist} from '../../actions/index'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        this.props.addPlaylist(this.state, this.props.currentUserId, this.props.history)

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
                    <TextField id="standard-basic" name="name" label="Name" value={this.state.name} onChange={this.handleChange} /><br/> 
                    <TextField id="standard-basic" name="description" label="Description" value={this.state.description} onChange={this.handleChange} /><br/> <br /> 
                    <Button type="submit" variant="contained" >Post Playlist</Button>
                </form> 
                
            </div>
        )
    }
}

export default connect(((state) => ({currentUserId: state.currentUser.id})), {addPlaylist})(PlaylistForm)
