import React, { Component } from 'react'

class ReviewForm extends Component {

    state ={
        rating: "",
        text:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }





    


    render() {
        

        return (
            <div>
                <form >
                    <label htmlFor="rating">Rating:</label>
                    <select name="rating" value={this.state.title} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br />
                    <label htmlFor="reviewText">Review:</label> <br/> 
                    <textarea name="text" value={this.state.artist} onChange={this.handleChange}/><br />
                    <input type="submit" value="Post Review" />
                </form>
            </div>
        )
    }
}

export default ReviewForm
