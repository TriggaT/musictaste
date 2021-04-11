import React, { Component } from 'react'
import { Box } from '@material-ui/core'

class Home extends Component {
    render() {
        return (
            <div>
                <h2> Welcome to Music Taste! </h2> 
                <Box m="auto" bgcolor="whitesmoke" alignItems="center" width={700} height={500} borderRadius="50%" >
                    <br/> <br/><br/>
                    <p> Use the menu icon above to navigate the website and sign up! </p>
                    <h4>Wondering how to share your music taste?</h4>
                    <p>Look no further but do read on! </p> 
                    <p> All you have to do is use the menu icon and go to <strong> <i> playlists</i></strong>. </p>
                    <p> Once you're there, you'll see a button to create a new playlist, click it! </p>
                    <p> You'll be asked to provide the name of the playlist and a brief description! </p>
                    <p> Make the name unique so it can stand out! </p>
                    <p> The description should give other users an ear for it. </p>
                    <p> That's it! </p>
                    <p> Check out others' playlists and share the taste it leaves in your ear! </p>
                    <p>They'll return the favor! </p>

                </Box>
                    

            </div>
        )
    }
}

export default Home
