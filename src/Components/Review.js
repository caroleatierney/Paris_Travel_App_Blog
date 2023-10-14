import React, { Component } from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default class Review extends Component {
    constructor(props) {
        super(props)
        this.review = props.review
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    render() {
        return (
            <div>
                <h1>
                    {this.review.name} {this.review.rating}
                </h1>
                <p>{this.review.text}</p>
            </div>
        )
    };
};