import React, { Component } from 'react'
import { NavLink,  withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {logOutUser, getPlaylists, userLoggedIn} from '../actions/index'
import { LogButton } from './users/LogButton';



class NavBar extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
        this.props.userLoggedIn()
    }
    state = {
        anchorEl: null,
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e) => {
        this.setState({ anchorEl: null });
    };

    
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
                        <NavLink to="/about" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>About</MenuItem>
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
                        <NavLink to="/contact" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem onClick={this.handleClose}>Contact</MenuItem>
                        </NavLink>
                        </Menu>
                        <Typography variant="h6" >
                        MusicTaste
                        </Typography>
                        <LogButton history={this.props.history} currentUser={this.props.currentUser} logOutUser={this.props.logOutUser}/>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default connect((state => ({currentUser: state.currentUser})),{logOutUser, getPlaylists, userLoggedIn})(withRouter(NavBar))
