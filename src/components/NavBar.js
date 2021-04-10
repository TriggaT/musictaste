import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {logOutUser} from '../actions/index'



class NavBar extends Component {
    state = {
        anchorEl: null,
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e) => {
        this.setState({ anchorEl: null });
    };

    handleLogOut = e => {
        this.props.logOutUser(this.props.history)
    }

    
    render() {
        const { anchorEl } = this.state;

        
        return (
            <div>
                <AppBar style={{ background: 'lightgrey' }} position="static">
                    <Toolbar>
                        <IconButton edge="start" aria-label="menu" onClick={this.handleClick} aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true">
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                        <NavLink to="/" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                        </NavLink>
                        <NavLink to="/signup" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>SignUp</MenuItem>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>LogIn</MenuItem>
                        </NavLink>
                        <NavLink to="/playlists" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>Playlists</MenuItem>
                        </NavLink>
                        </Menu>
                        <Typography variant="h6" >
                        MusicTaste
                        </Typography>
                        <Button onClick={this.handleLogOut} color="inherit">LogOut</Button>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default connect((state => ({currentUser: state.currentUser})),{logOutUser})(withRouter(NavBar))
