import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                NavBar
                <NavLink to="/">Home</NavLink>
                <NavLink to="/songs">Songs</NavLink>
            </div>
        )
    }
}

export default NavBar
