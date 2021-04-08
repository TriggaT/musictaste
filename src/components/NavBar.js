import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">LogIn</NavLink>
                <NavLink to="/playlists">Playlists</NavLink>
                
            </div>
        )
    }
}

export default NavBar
