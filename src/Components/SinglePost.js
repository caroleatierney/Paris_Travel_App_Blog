// This will be an individual post
import React, { Component } from 'react'
import Posts from './Posts'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default class Post extends Component {
    constructor(props) {
        super(props);
        this.post = props.post;
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>{this.post.blogName} {this.post.blogDate} {this.post.rating}</h1>
                <h1>{this.post.comments}</h1>
            </div>
        )
    }
}