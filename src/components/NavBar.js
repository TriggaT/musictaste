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

    handleClose = (e) => {
        // console.log(useHistory().push(e.target.outerText.toLowerCase()))
        // (window.location.href=`/${e.target.outerText.toLowerCase()}`)
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
                        <IconButton edge="start" aria-label="menu" onClick={this.handleClick} aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true">
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            // onClose={handleClose}
                        >
                        <NavLink to="/" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem >Home</MenuItem>
                        </NavLink>
                        <NavLink to="/signup" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem>SignUp</MenuItem>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem>LogIn</MenuItem>
                        </NavLink>
                        <NavLink to="/playlists" style={{ textDecoration: 'none', color:'black'}}>
                        <MenuItem>Playlists</MenuItem>
                        </NavLink>
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
