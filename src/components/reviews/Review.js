import React, { Component } from 'react'

export class Review extends Component {
    render() {
        const { review } = this.props;
        console.log(review)
        return (
            <>
                <span>
                <strong>Rating:</strong> {review.rating} <br /> 
                <strong>Review:</strong> {review.text}
                </span> <br /> <br/>   
            </>

        )
    }
}

export default Review