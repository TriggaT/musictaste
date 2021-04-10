import React, { Component } from 'react'
import Review from '../reviews/Review'
import {NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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

                <Button  onClick={() => this.props.history.push(`${match.url}/reviews/new`)} variant="contained">
                Add Your Review
                </Button> 
                
            </div>
        )
    }
}

export default Reviews
