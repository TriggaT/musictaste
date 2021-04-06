import React, { Component } from 'react'

export class Song extends Component {
    render() {
        const { song } = this.props;
        return (
            <>
            <li>
                <strong>Title:</strong> {song.title} <br /> 
                <strong>Artist:</strong> {song.artist}
            </li> <br />    
            </>
        )
    }
}

export default Song
