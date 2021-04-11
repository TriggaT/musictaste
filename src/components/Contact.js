import React, { Component } from 'react'
import { Box } from '@material-ui/core'

export class Contact extends Component {
    render() {
        return (
            <div>
                <br /> <br /> <br /> 
                <Box m="auto" bgcolor="whitesmoke" alignItems="center" width={400} height={250} borderRadius="50%" >
                    <br/> <h2> Contact </h2> 
                    <p> Please feel free to reach out with any questions or feature request! </p>
                    <p> If you just want to show love, I'd appreciate that too! </p> 
                    <p> Email: traytwebb14@yahoo.com </p>
                </Box> 
                
            </div>
        )
    }
}

export default Contact
