import React, { Component } from 'react'

class ReviewForm extends Component {

    state ={
        rating: "",
        text:""

    }

    


    render() {
        console.log(this.state)
        
        return (
            <div>
                <form >
                    <label htmlFor="rating">Rating:</label>
                    <input name="title" type="text" value={this.state.title} /><br /> 
                    <label htmlFor="reviewText">Review:</label>
                    <input name="reviewText" type="textarea" value={this.state.artist} onChange={this.handleChange}/><br />
                    <input type="submit" value="Post Review" />
                </form>
            </div>
        )
    }
}

export default ReviewForm
