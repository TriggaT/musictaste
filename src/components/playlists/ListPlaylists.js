import React, { Component } from 'react';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class ListPlaylists extends Component {

    handleClick = (e) => {
        const playlist = this.props.playlists.find(playlist => playlist.name === e.target.outerText)
        this.props.history.push(`/playlists/${playlist.id}`)
    }
    
    render() {
        if(this.props.loading){
            return (
                <h4>Loading...</h4>

            )
        }
        return (
            <div className="gridList">
                <GridList cellHeight={50} spacing={20}  cols={3} >
                    {this.props.playlists.map(playlist => 
                    <GridListTile key={playlist.id} >
                        <Card onClick={this.handleClick}>
                        <CardActionArea >
                            <CardContent >
                            <Typography variant="body1" color="textSecondary">
                               <strong> {playlist.name} </strong> 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </GridListTile>
                    )}
                </GridList>

            </div>
        )
    }
}



export default ListPlaylists
