import React, { Component } from 'react'

export default class SongsContainer extends Component {
    

    render() {
        const { songs, playlistId, match } = this.props; 
        return (
            <div>
                
             
                <Songs songs={songs} /> 
                <br /> 

                
                {/* <Route exact path={this.props.match.url} render={() => <h4>Choose any of the above playlist</h4>}/> */}
                
                
                
            
                
            </div>
        )
    }
}


