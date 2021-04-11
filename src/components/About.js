import React, { Component } from 'react'
import { Box } from '@material-ui/core'

export class About extends Component {
    render() {
        return (
            <div>
                <Box m="auto" bgcolor="whitesmoke" alignItems="center" width={200} height={200} >
                    <br/> <h2> What's MusicTaste? </h2> 
                    <p> MusicTaste is a place for music lovers around the world to share in their love of music! </p> 
                    <p>Sometimes the vibe is so strong you can taste it! </p>
                    <p> Just like when you're cooking up something good, you just want to share it someone else. </p>
                    <p> This is for artists, listeners, and anyone who just enjoys music. </p> 
                    <p> Other tasters will let you know what taste your sound left in thier ears! </p>
                    <p> You might even find your <i> music soulmate?!?!</i> </p>
                </Box> 
                
            </div>
        )
    }
}

export default About
