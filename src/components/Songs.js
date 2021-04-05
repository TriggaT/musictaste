import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'

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

export default connect((state) => ({songs: state.songs}))(Songs)
