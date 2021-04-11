import React, { Component } from 'react'
import { Box } from '@material-ui/core'

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <br /> <br /> <br /> 
                <Box m="auto" bgcolor="whitesmoke" alignItems="center" width={200} height={200} borderRadius="50%" >
                <br/> <h2> Where's your MusicTaste? </h2> 
                <p> Error 404 </p> 
                <p> Page not found </p> 
                    

                </Box>
            </div>
        )
    }
}

export default ErrorPage
