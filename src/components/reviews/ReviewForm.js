import React, { Component } from 'react'
import {addReview} from '../../actions/index'
import {connect} from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class ReviewForm extends Component {
    

    state ={
        rating: "1",
        text:""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addReview(this.state, this.props.playlistId, this.props.currentUserId, this.props.history)
        this.setState({
            rating: "1",
            text:""
        })
        
    }

    render() {
        

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <InputLabel id="rating-label">Rating</InputLabel>
                        <Select labelId="rating-label" name="rating" value={this.state.rating} onChange={this.handleChange}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select><br /> 
                    <TextField  name="text" label="Review" placeholder="What taste does it leave in your ear?" multiline value={this.state.text} onChange={this.handleChange} /><br/> <br /> 
                    <Button type="submit" variant="outlined" >Leave Your Taste</Button>
                </form>
            </div>
        )
    }
}

export default connect(((state) => ({currentUserId: state.currentUser.id})), {addReview})(ReviewForm)
