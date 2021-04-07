import React, { Component } from 'react'


export class Reviews extends Component {
    render() {
        return (
            <div>
                {reviews.map(r => { 
                    return (
                    <Review review={r} /> 
                    )
                })}

                <NavLink to={`${match.url}/reviews/new`}>Add Your Review</NavLink>
                
            </div>
        )
    }
}

export default Reviews
