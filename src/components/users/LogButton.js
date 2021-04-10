import React, { Component } from 'react'
import {logOutUser} from '../../actions/index'
import { withRouter} from "react-router-dom"
import {connect} from 'react-redux'


export class LogButton extends Component {

    handleLogOut = e => {
        this.props.logOutUser(this.props.history)
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
                <Button onClick={() => this.props.history.push('/login')} color="inherit">LogIn</Button>
                
            </>
        )
    }
}

export default connect((state => ({currentUser: state.currentUser})),{logOutUser})(withRouter(LogButton))
