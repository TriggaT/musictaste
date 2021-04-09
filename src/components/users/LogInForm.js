import React, { Component } from 'react'
import {logInUser} from '../../actions/index'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class LoginInForm extends Component {
     state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.logInUser(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="standard-basic" name="username" label="Username" value={this.state.username} onChange={this.handleChange} /><br/> 
                    <TextField id="standard-password-input" name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} /><br/> <br /> 
                    <Button type="submit" variant="contained" >Log In</Button>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {logInUser})(LoginInForm)
