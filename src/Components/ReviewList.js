import React, { Component } from 'react';
import Review from './Review'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default class ReviewList extends Component {
    constructor(props) {
        super(props)
        this.reviews = props.destination
    }

    render() {
        return (
            <div>
                {this.reviews.map((review, index) => (
                   <Review key={index} review={review} />
                ))}      
            </div>
        );
    };
};