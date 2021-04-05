import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Playlist extends Component {
    render() {
        return (
            <div>
                <NavLink to="/songs">Songs</NavLink>
                
            </div>
        )
    }
}

export default Playlist
