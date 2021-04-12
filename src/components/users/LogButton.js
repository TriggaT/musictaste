import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export class LogButton extends Component {

    handleLogOut = e => {
        this.props.logOutUser(this.props.history)
    }

    handleLogIn = e => {
        this.props.history.push('/login')
    }


    render() {
        
        if(JSON.stringify(this.props.currentUser) === "{}"){
            return (
                <div className="logButton">
                    <Button onClick={this.handleLogIn} color="inherit">LogIn</Button>
                </div>
            )
        }
        
        return (
            <div className="logButton">
                <Button onClick={this.handleLogOut} color="inherit">LogOut</Button>
                
            </div>
        )
    }
}

export default LogButton
