import React, { Component } from 'react'
import {createUser} from '../../actions/index'
import {connect} from 'react-redux'

export class SignUpForm extends Component {
    
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
        this.props.createUser(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/><br /> 
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/><br />
                    <input type="submit" value="Sign Up" />
                </form>
                
            </div>
        )
    }
}

export default connect(null, {createUser})(SignUpForm)
