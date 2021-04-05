import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Songs extends Component {
    render() {
        return (
            <div>
                <h3>Songs</h3>
                <NavLink to="/songs/new">Add New Song</NavLink>
                
            </div>
        )
    }
}

export default Songs
