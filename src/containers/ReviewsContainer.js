import React, { Component } from 'react'
import Reviews from "../components/reviews/Reviews"
import {Route} from 'react-router-dom';
import ReviewForm from '../components/reviews/ReviewForm'


class ReviewsContainer extends Component {
    render() {
        const { reviews, playlistId, match, history } = this.props; 

        const average = (arr) => {
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += arr[i]
            }

            let avg = total/arr.length
            return Math.ceil(avg * 100)/100
        }

        return (
            <div>
                <h4>Average Rating: {average(reviews.map(r => r.rating))} </h4>
                <Reviews reviews={reviews} match={match} history={history} /> 
                
                <Route path={`/playlists/${playlistId}/reviews/new`} render={routerProps => <ReviewForm {...routerProps} playlistId={playlistId} /> }/> 

                
                
            </div>
        )
    }
}

export default ReviewsContainer
