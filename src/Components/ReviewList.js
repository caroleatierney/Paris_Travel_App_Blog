import React, { Component } from 'react';
import Review from './Review'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default class ReviewList extends Component {
    constructor(props) {
        super(props)
        this.destinations = props.destination
        console.log(this.destinations)
    }

    render() {
        return (
            <div>
                {/* {this.destinations.map((destination, index) => ( */}
                    {/* <Review review={review.reviews} /> */}
                {/* ))}      */}
            </div>
        );
    };
};