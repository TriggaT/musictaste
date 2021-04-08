import React, { Component } from 'react'

export class Review extends Component {
    render() {
        const { review } = this.props;
        return (
            <>
                <span>
                <strong>{review.user.username}'s Taste</strong> <br /> 
                <i>Review:</i> {review.text} <br />
                <i>Rating:</i> {review.rating}  
                </span> <br /> <br/>   
            </>

        )
    }
}

export default Review