// This will be an individual post
import React, { Component } from 'react'

import Posts from './Posts'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.post = props.post;
        console.log(props);
    }

    render() {
        return (
            <div>
                <h3>{this.post.blogName}           {this.post.blogDate} {this.post.rating}</h3>
                <h6>{this.post.comments}</h6>
            </div>
        )
    }
}