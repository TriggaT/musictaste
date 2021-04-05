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
                    <input name="title" type="text" value={this.state.title} /><br /> 
                    <label htmlFor="artist">Artist:</label>
                    <input name="title" type="text" value={this.state.title} /><br />
                    <input type="submit" value="Add Song" />
                </form>
            </div>
        )
    }
}

export default SongForm
