import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from "@material-ui/core/GridList";
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button';

class Songs extends Component {
    render() {
        const { songs, match, history, currentUser, playlistUserId } = this.props; 
        
        function generate(element) {
            return [1].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
            );
        }

        const renderSongButton = () => {
            if(currentUser.id === playlistUserId){
                return  (
                    <Button  onClick={() => history.push(`${match.url}/songs/new`)}variant="contained">
                    Add Song
                    </Button> 
                )

            }
        }
            
        return (
            <div>
                <h3>Songs</h3>
                <GridList  cols={5} spacing={2}  >
                    {songs.map(song =>
                    <div key={song.id} >
                        <Box display="flex" width={525} >
                            <Box m="auto" bgcolor="whitesmoke" borderRadius="50%">
                                <List >
                                {generate(
                                    <ListItem  item="true"  >
                                        <ListItemText id="songInfo"  primary={`Title: ${song.title}`} secondary={`Artist: ${song.artist}`}/>
                                    </ListItem>,
                                )}
                                </List>
                            </Box>
                        </Box>
                    </div>
                    )}
                </GridList>
                {renderSongButton()}
            </div>
        )
    }
}

export default Songs
