import React, { Component } from 'react'

class SongForm extends Component {

    state = {
        title: "",
        artist: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
        console.log(this.state)

    }


    render() {
        return (
            <div>
                <form>
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

export default SongForm
