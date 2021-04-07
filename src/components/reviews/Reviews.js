import React, { Component } from 'react'
import Review from '../reviews/Review'
import {NavLink } from 'react-router-dom';


export class Reviews extends Component {
    render() {
        const { reviews, match  } = this.props;


        return (
            <div>
                {reviews.map(r => { 
                    return (
                    <Review key={r.id} review={r} /> 
                    )
                })}

                <NavLink to={`${match.url}/reviews/new`}>Add Your Review</NavLink>
                
            </div>
        )
    }
}

export default Reviews
