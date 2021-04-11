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
                <>
                {console.log(!!this.props.currentUser)}
                    <Button onClick={this.handleLogIn} color="inherit">LogIn</Button>
                </>
            )
        }
        
        return (
            <>
            {console.log(JSON.stringify(this.props.currentUser) === "{}")}
                <Button onClick={this.handleLogOut} color="inherit">LogOut</Button>
                
            </>
        )
    }
}

export default LogButton
