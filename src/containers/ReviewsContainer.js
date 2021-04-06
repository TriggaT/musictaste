import React, { Component } from 'react'
import Reviews from "../components/reviews/Reviews"


class ReviewsContainer extends Component {
    render() {
        const { reviews, playlistId, match } = this.props; 

        const average = (arr) => {
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += arr[i]
            }
            return total/arr.length
        }

        return (
            <div>
                <h4>Average Rating: {average(reviews.map(r => r.rating))} </h4>
                <Reviews reviews={reviews} /> 
               
                
            </div>
        )
    }
}

export default ReviewsContainer
