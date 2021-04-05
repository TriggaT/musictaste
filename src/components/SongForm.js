import React, { Component } from 'react'

class SongForm extends Component {

    state = {
        title: "",
        artist: ""
    }

    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input name="title" type="text"></input><br /> 
                    <label htmlFor="artist">Artist:</label>
                    <input name="title" type="text"></input><br />
                    <input type="submit" value="Add Song" />
                </form>
            </div>
        )
    }
}

export default SongForm
