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


class NavBar extends Component {
    state = {
        anchorEl: null,
    }

    


    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        console.log(this.props)
        this.setState({ anchorEl: null });
    };

    
    render() {
        const { anchorEl } = this.state;

        
        return (
            <div>
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">LogIn</NavLink>
                <NavLink to="/playlists">Playlists</NavLink> */}
                <AppBar style={{ background: 'lightgrey' }} position="static">
                    <Toolbar>
                        <IconButton edge="start"  color="lightgrey" aria-label="menu" onClick={this.handleClick} aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true">
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            // onClose={handleClose}
                        >
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                        <MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
                        <MenuItem onClick={this.handleClose}>Log In</MenuItem>
                        <MenuItem onClick={this.handleClose}>Playlists</MenuItem>
                        </Menu>
                        <Typography variant="h6" >
                        MusicTaste
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default NavBar
