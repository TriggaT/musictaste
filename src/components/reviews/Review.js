import React, { Component } from 'react'

export class Review extends Component {
    render() {
        const { review } = this.props;
        return (
            <>
                <span>
                <strong>Review:</strong> {review.text} <br />
                <strong>Rating:</strong> {review.rating}  
                
                </span> <br /> <br/>   
            </>

        )
    }
}

export default Review