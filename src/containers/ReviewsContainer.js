import React, { Component } from 'react'
import Review from "../components/reviews/Review"
import {Route, NavLink} from 'react-router-dom';


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
                {reviews.map(r => { 
                    return (
                    <Review review={r} /> 
                    )
                })}
                
                <Route path={`/playlists/${playlistId}/songs/new`} />
                 {/* render={routerProps => <ReviewForm {...routerProps} playlistId={playlistId}  /> }/> */}

                 <NavLink to={`${match.url}/reviews/new`}>Add Your Review</NavLink>
                
            </div>
        )
    }
}

export default ReviewsContainer
