import React, { Component } from 'react'

class PlaylistForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })

        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            name: "",
            description: ""
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/><br /> 
                    <label htmlFor="description">Description:</label>
                    <input name="description" type="text" value={this.state.description} onChange={this.handleChange}/><br />
                    <input type="submit" value="Add Song" />
                </form>
                
                
            </div>
        )
    }
}

export default PlaylistForm
