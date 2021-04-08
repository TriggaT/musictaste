import React, { Component } from 'react'
import {logInUser} from '../../actions/index'
import {connect} from 'react-redux'

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
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/><br /> 
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/><br />
                    <input type="submit" value="Log In" />
                </form>
                
            </div>
        )
    }
}

export default connect(null, {logInUser})(LoginInForm)
