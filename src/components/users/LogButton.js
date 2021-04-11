import React, { Component } from 'react'
import {logOutUser} from '../../actions/index'
import { withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';


export class LogButton extends Component {

    handleLogOut = e => {
        this.props.logOutUser(this.props.history)
    }

    handleLogIn = e => {
        this.props.history.push('/login')
    }


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
                <Button onClick={this.handleLogIn} color="inherit">LogIn</Button>
                
            </>
        )
    }
}

export default connect((state => ({currentUser: state.currentUser})),{logOutUser})(withRouter(LogButton))
