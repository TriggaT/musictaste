import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Song from "./Song"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from "@material-ui/core/GridList";
import { Box } from '@material-ui/core'

class Songs extends Component {
    render() {
        const { songs, match } = this.props; 
        
        function generate(element) {
            return [1].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
            );
        }
            
        return (
            <div>
                <h3>Songs</h3>
                <GridList item xs={3} cols={5} spacing={2}  >
                    {songs.map(song =>
                    <div >
                        <Box display="flex" width={500} height={50} >
                            <Box m="auto">
                                <List >
                                {generate(
                                    <ListItem  >
                                        <ListItemText primary={`Title: ${song.title}`} secondary={`Artist: ${song.artist}`}/>
                                    </ListItem>,
                                )}
                                </List>
                            </Box>
                        </Box>
                    </div>
                    )}
                </GridList>
                <NavLink to={`${match.url}/songs/new`}>Add New Song</NavLink> 
            </div>
        )
    }
}

export default Songs
