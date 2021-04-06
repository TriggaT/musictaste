import React, { Component } from 'react'

class Playlist extends Component {
    render() {
        const {playlist} = this.props
        return (
            <>
            <h3>{playlist.name}</h3>
            <h4>{playlist.description}</h4>
                
            </>
        )
    }
}

export default Playlist
