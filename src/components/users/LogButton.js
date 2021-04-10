import React, { Component } from 'react'

export class LogButton extends Component {
    render() {
        if(this.props.currentUser === {}){
            return (
                <>
                    <Button onClick={this.handleLogOut} color="inherit">LogOut</Button>
                </>
            )
        }
        
        return (
            <>
                <Button onClick={this.handleLogOut} color="inherit">LogIn</Button>
                
            </>
        )
    }
}

export default LogButton
