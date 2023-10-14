import React, { Component } from 'react';
import {Rating} from '@mui/material'

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
                    {this.review.name} <Rating />
                </h1>
                <p>{this.review.text}</p>
            </div>
        )
    };
};